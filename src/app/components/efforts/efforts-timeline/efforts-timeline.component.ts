import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TimeEfforts } from '../../../models/model';

@Component({
    selector: 'mac-efforts-timeline',
    templateUrl: './efforts-timeline.component.html',
    styleUrls: ['./efforts-timeline.component.scss']
})
export class EffortsTimelineComponent implements OnChanges {
    @Input() efforts: TimeEfforts;

    done: number;
    overtime: number;

    public ngOnChanges(changes: SimpleChanges): void {
        this.done = 0;
        this.overtime = 0;

        if (
            !this.efforts.estimated && this.efforts.effective ||
            (this.efforts.estimated && this.efforts.estimated === this.efforts.effective)
        ) {
            this.done = 100;
        } else if (this.efforts.estimated < this.efforts.effective) {
            this.done = this.efforts.estimated / this.efforts.effective * 100;
            this.overtime = 100 - this.done;
        } else {
            this.done = this.efforts.effective / this.efforts.estimated * 100;
        }
    }

}
