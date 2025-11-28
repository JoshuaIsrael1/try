import { Component, ElementRef, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-aesthic-demo-video',
  imports: [],
  templateUrl: './aesthic-demo-video.component.html',
  styleUrl: './aesthic-demo-video.component.scss'
})
export class AesthicDemoVideoComponent {
  @ViewChild('mainVideo2', { static: true }) mainVideo2!: ElementRef<HTMLVideoElement>;

  openModal() {
    const modalEl = document.getElementById('videoModal2');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    setTimeout(() => {
      this.mainVideo2.nativeElement.currentTime = 0;
      this.mainVideo2.nativeElement.play();
    }, 200);
  }

  closeModal() {
    const modalEl = document.getElementById('videoModal2');
    const modal = bootstrap.Modal.getInstance(modalEl); // Get existing instance
    if (modal) modal.hide();

    this.mainVideo2.nativeElement.pause();
  }
}
