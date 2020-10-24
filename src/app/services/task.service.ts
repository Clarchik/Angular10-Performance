import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Task } from '../models/model';

export function LogActivity(): any {
    return (_target: any, _key: string, descriptor: any) => {
        console.log(_target, 'sgsg');
        console.log(_key, 'sgsg');
        console.log(descriptor, 'sgsg');
    };
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = new BehaviorSubject<Task[]>([]);

    constructor(private http: HttpClient) {
        this.loadTasks();
    }

    private loadTasks(): void {
        this.http.get<Task[]>('/api/tasks')
            .subscribe((tasks) => this.tasks.next(tasks));
    }

    public getTasks(): Observable<Task[]> {
        return this.tasks.asObservable().pipe(delay(100));
    }

    public addTask(task: Task): any {
        return this.http
            .post<Task>('/api/tasks', task)
            .subscribe(() => this.loadTasks());
    }

    public updateTask(task: Task): any {
        return this.http
            .post(`/api/tasks/${task.id}`, task)
            .subscribe(() => this.loadTasks());
    }

    public getProjectTasks(projectId: number): Observable<Task[]> {
        return this.tasks
            .asObservable()
            .pipe(
                map((tasks) => tasks.filter((task) => task.projectId === projectId))
            );
    }
}
