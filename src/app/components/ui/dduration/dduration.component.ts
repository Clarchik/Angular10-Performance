import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { parseDuration } from '../../../utilities/time-utilities';

@Component({
    selector: 'mac-duration',
    templateUrl: './dduration.component.html',
    styleUrls: ['./dduration.component.scss']
})
export class DdurationComponent {
    @Input() duration: number;
    @Output() outDurationChange = new EventEmitter<number>();

    public editSaved(formattedDuration: string): void {
        this.outDurationChange.emit(parseDuration(formattedDuration));
    }

}
