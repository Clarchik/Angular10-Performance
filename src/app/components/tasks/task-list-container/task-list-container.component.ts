import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Project, Task, TaskListFilterType } from '../../../models/model';
import { ActivitiesService } from '../../../services/activities.service';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { limitWithEllipsis } from '../../../utilities/string-utilities';

@Component({
    selector: 'mac-task-list-container',
    templateUrl: './task-list-container.component.html',
    styleUrls: ['./task-list-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListContainerComponent {
    selectedProject: Observable<Project>;
    tasks: Observable<Task[]>;
    filteredTasks: Observable<Task[]>;
    taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
    activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

    constructor(
        private taskService: TaskService,
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private router: Router,
        private activitiesService: ActivitiesService) {
        this.selectedProject = combineLatest(
            [projectService.getProjects(),
            route.parent.params]
        ).pipe(
            map(([projects, routeParams]) =>
                projects.find((project) => project.id === +routeParams.projectId)
            )
        );
        this.tasks = this.selectedProject.pipe(
            switchMap((project) => this.taskService.getProjectTasks(project.id)),
            map(tasks => tasks.sort((a: Task, b: Task) => a.order - b.order))
        );
        this.filteredTasks = this.filterTasks();
    }

    private filterTasks(): any {
        return combineLatest([this.tasks, this.activeTaskFilterType])
            .pipe(
                map(([tasks, activeTaskFilterType]) => {
                    return tasks.filter((task: Task) => {
                        if (activeTaskFilterType === 'all') {
                            return true;
                        } else if (activeTaskFilterType === 'open') {
                            return !task.done;
                        } else {
                            return task.done;
                        }
                    });
                })
            );
    }


    public activateFilterType(type: TaskListFilterType): void {
        this.activeTaskFilterType.next(type);
    }

    public addTask(title: string): void {
        combineLatest([this.selectedProject, this.tasks])
            .pipe(
                take(1)
            )
            .subscribe(([project, tasks]) => {
                const position = tasks.reduce(
                    (max, t: Task) => t.order > max ? t.order : max, 0
                ) + 1;
                const task: Task = {
                    projectId: project.id, title, done: false, order: position, created: +new Date()
                };

                this.taskService.addTask(task);
                this.activitiesService.logProjectActivity(
                    project.id,
                    'tasks',
                    'A task was added',
                    `A new task "${limitWithEllipsis(title, 30)}" was added to #project-${project.id}.`
                );
            });
    }

    public updateTask(task: Task): void {
        this.taskService.updateTask(task);
        this.activitiesService.logProjectActivity(
            task.projectId,
            'tasks',
            'A task was updated',
            `The task "${limitWithEllipsis(task.title, 30)}" was updated on #project-${task.projectId}.`
        );
    }

    public showDetails(task: Task): void {
        this.selectedProject
            .pipe(take(1))
            .subscribe(selectedProject => {
                this.router.navigate(['/projects', selectedProject.id, 'tasks', task.id]);
            });
    }

}
