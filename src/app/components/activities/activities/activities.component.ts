import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity, ActivitySliderSelection } from '../../../models/model';

@Component({
    selector: 'mac-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
    @Input() activities: Activity[];
    @Input() selectedActivities: Activity[];
    @Output() outSelectionChange = new EventEmitter<ActivitySliderSelection>();

    public selectionChange(selection: ActivitySliderSelection): void {
        this.outSelectionChange.emit(selection);
    }
    constructor() { }

    ngOnInit(): void {
    }

}
