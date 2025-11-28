import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDemoVideoComponent } from './salon-demo-video.component';

describe('SalonDemoVideoComponent', () => {
  let component: SalonDemoVideoComponent;
  let fixture: ComponentFixture<SalonDemoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalonDemoVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonDemoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
