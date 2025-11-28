import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermaClinicComponent } from './derma-clinic.component';

describe('DermaClinicComponent', () => {
  let component: DermaClinicComponent;
  let fixture: ComponentFixture<DermaClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DermaClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DermaClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
