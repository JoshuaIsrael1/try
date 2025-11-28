import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-image-pin-anime',
  imports: [CommonModule],
  templateUrl: './image-pin-anime.component.html',
  styleUrl: './image-pin-anime.component.scss',
})
export class ImagePinAnimeComponent implements AfterViewInit {
  isdarkMode: boolean = false;

  ngAfterViewInit(): void {
    this.pinAndZoom();
    this.makeIconMove();
  }

  pinAndZoom() {
    //const sections = ['.secOne', '.secOne2', '.secOne3'];
    const sections = ['.secOne'];

    ScrollTrigger.matchMedia({
      //desk
      '(min-width:1025px)': () => {
        sections.forEach((secClass) => {
          gsap.set(secClass, { scale: 0.5 });

          gsap.to(secClass, {
            scale: 1.0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: secClass,
              scrub: true,
              pin: true,
              start: 'top 30%',
              end: '+=200%',
              markers: false,
            },
          });
        });
      },
      //mobile
      '(max-width:1024px)': () => {
        sections.forEach((secClass) => {
          gsap.set(secClass, { scale: 0.4 });
          //  height: '100vh'
          gsap.to(secClass, {
            scale: 0.9,
            // height: '100%',
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: secClass,
              scrub: true,
              pin: true,
              start: 'top 30%',
              end: '+=200%',
              markers: false,
            },
          });
        });
      },
    });
  }

  makeIconMove() {
    gsap.to('.reactIcon', {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: 'back',
    });
    gsap.to('.techIcon', {
      y: -30,
      repeat: -1,
      ease: 'sine.inOut',
      // duration: 2,
      yoyo: true,
      scale: 1.3,
      repeatDelay: 3,
      stagger: {
        each: 0.4,
      },
    });
  }
}
