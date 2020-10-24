import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'mac-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

    @Input() buttonList: string[];
    @Input() activeButton: string;
    @Output() outActivate = new EventEmitter<string>();

    public ngOnInit(): void {
        if (!this.activeButton) {
            this.activeButton = this.buttonList[0];
        }
    }

    public activate(button: string): void {
        this.outActivate.emit(button);
    }

}
