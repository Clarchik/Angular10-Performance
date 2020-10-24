import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project, ProjectSummary } from '../../../models/model';
import { ActivitiesService } from '../../../services/activities.service';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { limitWithEllipsis } from '../../../utilities/string-utilities';

@Component({
    selector: 'mac-projects-dashboard-container',
    templateUrl: './projects-dashboard-container.component.html',
    styleUrls: ['./projects-dashboard-container.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectsDashboardContainerComponent {

    projectSummaries: Observable<ProjectSummary[]>;

    constructor(
        private projectService: ProjectService,
        private taskService: TaskService,
        private activitiesService: ActivitiesService,
        private router: Router) {
        this.projectSummaries = combineLatest(
            [
                this.projectService.getProjects(),
                this.taskService.getTasks(),
                this.activitiesService.getActivities()
            ]
        ).pipe(
            map(([projects, tasks, activities]) =>
                projects
                    .map(project => ({
                        project,
                        description: limitWithEllipsis(project.description, 100),
                        tasks: tasks.filter(task => task.projectId === project.id),
                        activities: activities.filter(activity => activity.projectId === project.id)
                    }))
            )
        );
    }

    public activateProject(project: Project): void {
        this.router.navigate(['/projects', project.id]);
    }

}
