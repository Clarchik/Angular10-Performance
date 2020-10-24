import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ProjectActivitiesContainerComponent } from './components/activities/project-activities-container/project-activities-container.component';
import { ProjectCommentsContainerComponent } from './components/comments/project-comments-container/project-comments-container.component';
import { ProjectsDashboardContainerComponent } from './components/dashboard/projects-dashboard-container/projects-dashboard-container.component';
import { ProjectContainerComponent } from './components/projects/project-container/project-container.component';
import { TaskDetailsContainerComponent } from './components/tasks/task-details-container/task-details-container.component';
import { TaskListContainerComponent } from './components/tasks/task-list-container/task-list-container.component';
import { ProjectContainerGuard } from './guards/project-container.guard';

export const routes: Route[] = [
    {
        path: 'dashboard',
        component: ProjectsDashboardContainerComponent
    },
    {
        path: 'projects/:projectId',
        component: ProjectContainerComponent,
        canActivate: [ProjectContainerGuard],
        children: [
            {
                path: 'tasks',
                component: TaskListContainerComponent
            },
            {
                path: 'tasks/:taskId',
                component: TaskDetailsContainerComponent
            },
            {
                path: 'comments',
                component: ProjectCommentsContainerComponent
            },
            {
                path: 'activities',
                component: ProjectActivitiesContainerComponent
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/projects/1'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
