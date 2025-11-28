import { Component, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-salon-demo-video',
  templateUrl: './salon-demo-video.component.html',
  styleUrls: ['./salon-demo-video.component.scss']
})
export class SalonDemoVideoComponent {
  @ViewChild('mainVideo', { static: true }) mainVideo!: ElementRef<HTMLVideoElement>;

  openModal() {
    const modalEl = document.getElementById('videoModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    setTimeout(() => {
      this.mainVideo.nativeElement.currentTime = 0;
      this.mainVideo.nativeElement.play();
    }, 200);
  }

  closeModal() {
    const modalEl = document.getElementById('videoModal');
    const modal = bootstrap.Modal.getInstance(modalEl); // Get existing instance
    if (modal) modal.hide();

    this.mainVideo.nativeElement.pause();
  }
}
