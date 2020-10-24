import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActivitiesContainerComponent } from './project-activities-container.component';

describe('ProjectActivitiesContainerComponent', () => {
    let component: ProjectActivitiesContainerComponent;
    let fixture: ComponentFixture<ProjectActivitiesContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectActivitiesContainerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectActivitiesContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


});
