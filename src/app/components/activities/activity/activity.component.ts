import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Activity, ActivityAlignment } from '../../../models/model';

@Component({
    selector: 'mac-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    @Input() activity: Activity;
    @Input() alignment: ActivityAlignment;
    @Input() @HostBinding('class.start-mark') startMark;
    @Input() @HostBinding('class.end-mark') endMark;

    public isAlignedRight(): boolean {
        return this.alignment === 'right';
    }
    constructor() { }

    ngOnInit(): void {
    }

}
