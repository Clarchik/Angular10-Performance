import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tag, Task } from '../../../models/model';
import { TagsService } from '../../../services/tags.service';
import { TaskService } from '../../../services/task.service';

@Component({
    selector: 'mac-task-details-container',
    templateUrl: './task-details-container.component.html',
    styleUrls: ['./task-details-container.component.scss']
})
export class TaskDetailsContainerComponent {
    task: Observable<Task>;
    tags: Observable<Tag[]>;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private tagsService: TagsService) {
        this.task = combineLatest(
            [
                this.taskService.getTasks(),
                route.params
            ]
        ).pipe(
            map(([tasks, routeParams]) =>
                tasks.find((task) => task.id === +routeParams.taskId)
            )
        );
        this.tags = this.tagsService.tags;
    }

    public updateTask(task: Task): void {
        this.taskService.updateTask(task);
    }

}
