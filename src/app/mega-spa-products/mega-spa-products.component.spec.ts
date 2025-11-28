import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSpaProductsComponent } from './mega-spa-products.component';

describe('MegaSpaProductsComponent', () => {
  let component: MegaSpaProductsComponent;
  let fixture: ComponentFixture<MegaSpaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaSpaProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSpaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
