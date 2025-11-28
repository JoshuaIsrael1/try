import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutPageComponent } from './new-about-page.component';

describe('NewAboutPageComponent', () => {
  let component: NewAboutPageComponent;
  let fixture: ComponentFixture<NewAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
