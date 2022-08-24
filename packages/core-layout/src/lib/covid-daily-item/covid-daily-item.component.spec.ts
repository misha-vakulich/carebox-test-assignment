import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDailyItemComponent } from './covid-daily-item.component';

describe('CovidDailyItemComponent', () => {
  let component: CovidDailyItemComponent;
  let fixture: ComponentFixture<CovidDailyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidDailyItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CovidDailyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
