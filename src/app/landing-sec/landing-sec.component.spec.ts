import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSecComponent } from './landing-sec.component';

describe('LandingSecComponent', () => {
  let component: LandingSecComponent;
  let fixture: ComponentFixture<LandingSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
