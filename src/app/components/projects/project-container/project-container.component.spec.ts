import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContainerComponent } from './project-container.component';

describe('ProjectContainerComponent', () => {
    let component: ProjectContainerComponent;
    let fixture: ComponentFixture<ProjectContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectContainerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});