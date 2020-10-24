import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommentsContainerComponent } from './project-comments-container.component';

describe('ProjectCommentsContainerComponent', () => {
    let component: ProjectCommentsContainerComponent;
    let fixture: ComponentFixture<ProjectCommentsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectCommentsContainerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectCommentsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
