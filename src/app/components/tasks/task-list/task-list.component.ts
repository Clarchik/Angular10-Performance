import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task, TaskListFilterType } from '../../../models/model';
import { TaskService } from '../../../services/task.service';

@Component({
    selector: 'mac-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
    @Input() taskFilterTypes: TaskListFilterType[];
    @Input() activeTaskFilterType: TaskListFilterType;
    @Input() tasks: Task[];
    @Output() outAddTask = new EventEmitter<string>();
    @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();
    @Output() outUpdateTask = new EventEmitter<Task>();
    @Output() outDeleteTask = new EventEmitter<Task>();
    @Output() outShowDetails = new EventEmitter<Task>();

    addTask(title: string): void {
        this.outAddTask.emit(title);
    }

    activateFilterType(type: TaskListFilterType): void {
        this.outActivateFilterType.emit(type);
    }

    updateTask(task: Task): void {
        this.outUpdateTask.emit(task);
    }

    dropTask(target: Task, source: Task): void {
        if (target.id === source.id) {
            return;
        }

        this.outUpdateTask.emit({
            ...target,
            order: source.order
        });
        this.outUpdateTask.emit({
            ...source,
            order: target.order
        });
    }

    deleteTask(task: Task): void {
        this.outDeleteTask.emit(task);
    }

    showDetails(task: Task): void {
        this.outShowDetails.emit(task);
    }
}
