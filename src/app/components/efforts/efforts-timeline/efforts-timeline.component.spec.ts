import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortsTimelineComponent } from './efforts-timeline.component';

describe('EffortsTimelineComponent', () => {
  let component: EffortsTimelineComponent;
  let fixture: ComponentFixture<EffortsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffortsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
