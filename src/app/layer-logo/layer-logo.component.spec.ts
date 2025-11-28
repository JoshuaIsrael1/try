import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerLogoComponent } from './layer-logo.component';

describe('LayerLogoComponent', () => {
  let component: LayerLogoComponent;
  let fixture: ComponentFixture<LayerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
