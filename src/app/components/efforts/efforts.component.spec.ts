import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeEfforts } from '../../models/model';

import { EffortsComponent } from './efforts.component';

describe('EffortsComponent', () => {
    let component: EffortsComponent;
    let fixture: ComponentFixture<EffortsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EffortsComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EffortsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add eight hours correctly', () => {
        const hour = 3600000;
        component.efforts = { estimated: 0, effective: 0 };
        spyOn(component.outEffortsChange, 'emit');
        component.addEffectiveHours(8);
        expect(component.outEffortsChange.emit).toHaveBeenCalledWith({
            estimated: 0,
            effective: hour * 8
        });
    });
});
