import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project, Task, User } from './models/model';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';

@Component({
    selector: 'mac-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    openTasksCount: Observable<number>;
    user: Observable<User>;
    projects: Observable<Project[]>;
    selectedProject: Observable<Project>;
    title = 'Angular10-TaskList';
    constructor(
        private taskListService: TaskService,
        private projectService: ProjectService,
        private userService: UserService) {
        this.projects = this.projectService.getProjects();
        this.selectedProject = this.projectService.getSelectedProject();
        this.user = this.userService.getCurrentUser();
        this.openTasksCount = this.countOpenedTasks();


    }

    public selectProject(id: number): void {
        this.projectService.selectProject(id);
    }

    private countOpenedTasks(): Observable<number> {
        return this.openTasksCount = this.taskListService.getTasks()
            .pipe(
                map((tasks: Task[]) => {
                    return tasks
                        .filter((task) => !task.done)
                        .length;
                })
            );
    }
}
