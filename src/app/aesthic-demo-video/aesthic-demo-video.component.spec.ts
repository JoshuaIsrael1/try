import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesthicDemoVideoComponent } from './aesthic-demo-video.component';

describe('AesthicDemoVideoComponent', () => {
  let component: AesthicDemoVideoComponent;
  let fixture: ComponentFixture<AesthicDemoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AesthicDemoVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AesthicDemoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
