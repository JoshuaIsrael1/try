import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAndPayrollComponent } from './hr-and-payroll.component';

describe('HrAndPayrollComponent', () => {
  let component: HrAndPayrollComponent;
  let fixture: ComponentFixture<HrAndPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAndPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAndPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
