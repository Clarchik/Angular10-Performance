import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity, ActivitySliderSelection } from '../../../models/model';
import { ActivitiesService } from '../../../services/activities.service';
import { ProjectService } from '../../../services/project.service';

@Component({
    selector: 'mac-project-activities-container',
    templateUrl: './project-activities-container.component.html',
    styleUrls: ['./project-activities-container.component.scss']
})
export class ProjectActivitiesContainerComponent {
    activities: Observable<Activity[]>;
    selection = new BehaviorSubject<ActivitySliderSelection | null>(null);
    selectedActivities: Observable<Activity[]>;

    constructor(
        private projectService: ProjectService,
        private activitiesService: ActivitiesService,
        private route: ActivatedRoute) {
        this.activities = combineLatest(
            [this.activitiesService.getActivities(),
            route.parent.params]
        ).pipe(
            map(([activities, routeParams]) =>
                activities
                    .filter(activity => activity.kind === 'project' &&
                        activity.projectId === +routeParams.projectId)
            )
        );

        this.selectedActivities = combineLatest(
            [this.activities,
            this.selection]
        ).pipe(
            map(([activities, selection]) => {
                if (selection) {
                    return activities.filter(
                        (activity) => activity.time >= selection.start && activity.time <= selection.end
                    );
                } else {
                    return activities;
                }
            })
        );
    }

    public selectionChange(selection: ActivitySliderSelection): void {
        this.selection.next(selection);
    }

}
