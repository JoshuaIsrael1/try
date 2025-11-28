import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessContactComponent } from './success-contact.component';

describe('SuccessContactComponent', () => {
  let component: SuccessContactComponent;
  let fixture: ComponentFixture<SuccessContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
