import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePinAnimeComponent } from './image-pin-anime.component';

describe('ImagePinAnimeComponent', () => {
  let component: ImagePinAnimeComponent;
  let fixture: ComponentFixture<ImagePinAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePinAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePinAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
