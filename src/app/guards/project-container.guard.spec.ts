import { TestBed } from '@angular/core/testing';

import { ProjectContainerGuard } from './project-container.guard';

describe('ProjectContainerGuard', () => {
    let guard: ProjectContainerGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(ProjectContainerGuard);
    });
});
