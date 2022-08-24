import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDailyComponent } from './covid-daily.component';

describe('CovidDailyComponent', () => {
  let component: CovidDailyComponent;
  let fixture: ComponentFixture<CovidDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidDailyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CovidDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
