import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrumblerTextEffectComponent } from './srumbler-text-effect.component';

describe('SrumblerTextEffectComponent', () => {
  let component: SrumblerTextEffectComponent;
  let fixture: ComponentFixture<SrumblerTextEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrumblerTextEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrumblerTextEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
