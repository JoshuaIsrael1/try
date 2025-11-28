import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlideTestComponent } from './product-slide-test.component';

describe('ProductSlideTestComponent', () => {
  let component: ProductSlideTestComponent;
  let fixture: ComponentFixture<ProductSlideTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlideTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlideTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
