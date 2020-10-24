import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UNITS } from '../../utilities/time-utilities';
import { TimeEfforts } from '../../models/model';

@Component({
    selector: 'mac-efforts',
    templateUrl: './efforts.component.html',
    styleUrls: ['./efforts.component.scss']
})
export class EffortsComponent {
    @Input() efforts: TimeEfforts;
    @Output() outEffortsChange = new EventEmitter<TimeEfforts>();

    public estimatedChange(estimated: number): void {
        this.outEffortsChange.emit({
            ...this.efforts,
            estimated
        });
    }

    public effectiveChange(effective: number): void {
        this.outEffortsChange.emit({
            ...this.efforts,
            effective
        });
    }

    public addEffectiveHours(hours: number): void {
        const hourMilliseconds = UNITS.find((unit) => unit.short === 'h').milliseconds;
        let effective = this.efforts && this.efforts.effective ? this.efforts.effective : 0;
        effective += hours * hourMilliseconds;

        this.outEffortsChange.emit({
            ...this.efforts,
            effective
        });
    }

}
