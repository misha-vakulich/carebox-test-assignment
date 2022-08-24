import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTableInheritedComponent } from './covid-table-inherited.component';

describe('CovidTableInheritedComponent', () => {
  let component: CovidTableInheritedComponent;
  let fixture: ComponentFixture<CovidTableInheritedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidTableInheritedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CovidTableInheritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
