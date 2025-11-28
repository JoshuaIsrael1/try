import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAndShippingPolicyComponent } from './refund-and-shipping-policy.component';

describe('RefundAndShippingPolicyComponent', () => {
  let component: RefundAndShippingPolicyComponent;
  let fixture: ComponentFixture<RefundAndShippingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundAndShippingPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundAndShippingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
