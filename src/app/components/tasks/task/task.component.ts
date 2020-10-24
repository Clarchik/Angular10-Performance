import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { Task } from '../../../models/model';

@Component({
    selector: 'mac-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TaskComponent {
    @Input() task: Task;
    @Output() outUpdateTask = new EventEmitter();
    @Output() outDeleteTask = new EventEmitter<Task>();
    @Output() outShowDetails = new EventEmitter<Task>();
    @HostBinding('class.done')
    get done(): boolean {
        return this.task && this.task.done;
    }

    public updateTask(done: boolean): void {
        this.outUpdateTask.emit({
            ...this.task,
            done,
            completed: done ? +new Date() : this.task.completed
        });
    }

    public updateTitle(title: string): void {
        this.outUpdateTask.emit({
            ...this.task,
            title
        });
    }

    public deleteTask(): void {
        this.outDeleteTask.emit(this.task);
    }

    public showDetails(): void {
        this.outShowDetails.emit(this.task);
    }
}
