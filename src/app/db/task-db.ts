import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Activity, Project, Task, User } from '../models/model';

export class TaskDB implements InMemoryDbService {
    public createDb(): { projects: Project[], tasks: Task[], users: User[], activities: Activity[] } {
        const now = +new Date();

        const users: User[] = [
            { id: 1, name: 'You', pictureUrl: '/assets/user.svg' }
        ];

        const activities: Activity[] = [{
            id: 1,
            kind: 'project',
            user: users[0],
            time: now - 1000 * 60 * 60 * 8,
            projectId: 1,
            category: 'tasks',
            title: 'A task was updated',
            message: 'The task \'Task 1\' was updated on #project-1.'
        }, {
            id: 2,
            kind: 'project',
            user: users[0],
            time: now - 1000 * 60 * 60 * 5,
            projectId: 2,
            category: 'tasks',
            title: 'A task was updated',
            message: 'The task \'Task 1\' was updated on #project-2.'
        }, {
            id: 3,
            kind: 'project',
            user: users[0],
            time: now - 1000 * 60 * 60 * 2,
            projectId: 2,
            category: 'tasks',
            title: 'A task was updated',
            message: 'The task \'Task 2\' was updated on #project-2.'
        }];

        const projects: Project[] = [
            { id: 1, title: 'My first project', description: 'This is your first project.', comments: [{ content: '1', time: null, user: { id: 1, name: 'You', pictureUrl: '/assets/user.svg' } }] },
            { id: 2, title: 'My second project', description: 'This is your second project.', comments: [] }
        ];

        const hour = 3600000;
        const tasks: Task[] = [
            { id: 1, projectId: 1, title: 'Task 1', done: false, order: 1, created: +new Date() - hour * 8 },
            { id: 2, projectId: 1, title: 'Task 2', done: false, order: 2, created: +new Date() - hour * 6 },
            {
                id: 3, projectId: 1, title: 'Task 3', done: true, order: 3, created: +new Date() - hour * 12,
                completed: +new Date() - hour * 3
            },
            { id: 4, projectId: 1, title: 'Task 4', done: false, order: 4, created: +new Date() - hour * 20 },
            { id: 2, projectId: 2, title: 'Task 4', done: false, order: 4, created: +new Date() - hour * 8 },
            { id: 3, projectId: 2, title: 'Task 4', done: false, order: 4, created: +new Date() - hour * 6 },
            { id: 4, projectId: 2, title: 'Task 4', done: false, order: 4, created: +new Date() - hour * 12 }
        ];
        return { projects, tasks, users, activities };
    }
}
