import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSectionsComponent } from './landing-sections.component';

describe('LandingSectionsComponent', () => {
  let component: LandingSectionsComponent;
  let fixture: ComponentFixture<LandingSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
