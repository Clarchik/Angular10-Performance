import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/model';

@Component({
    selector: 'mac-user-area',
    templateUrl: './user-area.component.html',
    styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent {
    @Input() user: User;
    @Input() openTasksCount: number;

}
