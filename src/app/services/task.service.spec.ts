import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
    let service: TaskService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TaskService);
    });
});
