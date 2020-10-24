import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdurationComponent } from './dduration.component';

describe('DdurationComponent', () => {
    let component: DdurationComponent;
    let fixture: ComponentFixture<DdurationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DdurationComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DdurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

});
