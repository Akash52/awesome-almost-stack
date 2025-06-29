import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDetailComponent } from './habit-detail.component';

describe('HabitDetailComponent', () => {
  let component: HabitDetailComponent;
  let fixture: ComponentFixture<HabitDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabitDetailComponent]
    });
    fixture = TestBed.createComponent(HabitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
