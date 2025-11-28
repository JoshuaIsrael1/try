import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AestheticComponent } from './aesthetic.component';

describe('AestheticComponent', () => {
  let component: AestheticComponent;
  let fixture: ComponentFixture<AestheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AestheticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AestheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
