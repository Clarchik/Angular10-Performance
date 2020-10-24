import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag, Task, TimeEfforts } from '../../../models/model';

@Component({
    selector: 'mac-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
    @Input() task: Task;
    @Input() tags: Tag[];
    @Output() outUpdateTask = new EventEmitter<Task>();

    public updateTitle(title: string): void {
        this.outUpdateTask.emit({
            ...this.task,
            title
        });
    }

    public updateDescription(description: string): void {
        this.outUpdateTask.emit({
            ...this.task,
            description
        });
    }

    public updateEfforts(efforts: TimeEfforts): void {
        this.outUpdateTask.emit({
            ...this.task,
            efforts
        });
    }

}
