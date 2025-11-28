import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureAestheticComponent } from './future-aesthetic.component';

describe('FutureAestheticComponent', () => {
  let component: FutureAestheticComponent;
  let fixture: ComponentFixture<FutureAestheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureAestheticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureAestheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
