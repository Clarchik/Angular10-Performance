import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mac-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {

    @Input() label: string;
    @Input() checked: boolean;
    @Output() outCheck = new EventEmitter<boolean>();

    public check(checked: boolean): void {
        this.outCheck.emit(checked);
    }

}
