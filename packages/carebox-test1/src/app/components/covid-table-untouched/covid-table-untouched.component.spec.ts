import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTableUntouchedComponent } from './covid-table-untouched.component';

describe('CovidTableUntouchedComponent', () => {
  let component: CovidTableUntouchedComponent;
  let fixture: ComponentFixture<CovidTableUntouchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidTableUntouchedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CovidTableUntouchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
