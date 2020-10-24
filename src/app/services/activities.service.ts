import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { Activity, ProjectActivity, User } from '../models/model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    private activities = new BehaviorSubject<Activity[]>([]);

    constructor(private http: HttpClient, private userService: UserService) {
        this.loadActivities();
    }

    private loadActivities(): void {
        this.http.get<Activity[]>('/api/activities')
            .subscribe((activities) => this.activities.next(activities));
    }

    public getActivities(): Observable<any> {
        return this.activities
            .asObservable().pipe(
                map(activities => activities.sort((a, b) => b.time - a.time))
            );
    }

    public logProjectActivity(projectId: number, category: string, title: string, message: string): void {
        this.userService.getCurrentUser()
            .pipe(
                take(1),
                mergeMap((user: User) => this.http
                    .post('/api/activities', <ProjectActivity>{
                        kind: 'project',
                        time: +new Date(),
                        projectId,
                        user,
                        category,
                        title,
                        message
                    })
                )
            ).subscribe(() => this.loadActivities());
    }
}
