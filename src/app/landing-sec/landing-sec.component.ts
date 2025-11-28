import { AfterViewInit, Component, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { LayerLogoComponent } from '../layer-logo/layer-logo.component';
import { ScrollTrigger } from 'gsap/all';

import { NewHomePageComponent } from '../new-home-page/new-home-page.component';
import { NewAboutPageComponent } from '../new-about-page/new-about-page.component';
import { ProductSlideTestComponent } from '../product-slide-test/product-slide-test.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-sec',
  imports: [
    LayerLogoComponent,
    NewAboutPageComponent,
    NewHomePageComponent,
    ProductSlideTestComponent,
  ],
  templateUrl: './landing-sec.component.html',
  styleUrl: './landing-sec.component.scss',
})
export class LandingSecComponent implements AfterViewInit {
  words = ['Innovate.', 'Automate.', 'Scale.', 'Transform.'];
  currentWordIndex = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const el = document.getElementById('bouncingWord');
    const landImg = document.getElementById('landImg');

    const animate = () => {
      if (!el) return;

      el.textContent = this.words[this.currentWordIndex];

      gsap.fromTo(
        el,
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'back',
          onComplete: () => {
            gsap.to(el, {
              delay: 1.2,
              y: -2,
              opacity: 0,
              duration: 0.5,
              ease: 'expo',
              onComplete: () => {
                this.currentWordIndex =
                  (this.currentWordIndex + 1) % this.words.length;
                animate(); // loop
              },
            });
          },
        }
      );
    };

    animate();
    this.animateImage();
    this.btnAnimate();
  }

  animateImage() { }

  btnAnimate() {
    const panels = this.el.nativeElement.querySelector('#btnSrt');
    const panels2 = this.el.nativeElement.querySelector('#btn2Srt2');
    const assistBtn = this.el.nativeElement.querySelector('#assistBtn');
    const assistText = assistBtn.querySelector('span');

    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        gsap.set(assistBtn, { opacity: 1, bottom: -100 });

        const morphTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: panels,
            start: 'top 10%',
            end: 'bottom 96%',
            scrub: 1,
          },
        });

        morphTimeline
          .to(assistBtn, {
            bottom: 40,
            opacity: 1,
            ease: 'expo',
            // duration: 1
          })
          .to(assistBtn, {
            width: 'auto',
            height: 'auto',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            lineHeight: 'normal',
            // backgroundColor: "#00e5ffff",
            // duration: 0.5,
            ease: 'expo',
          })
          .to(assistText, {
            opacity: 1,
            duration: 0.3,
            ease: 'expo',
          });
      },

      //mobile
      '(max-width: 1024px)': () => {
        gsap.set(assistBtn, { opacity: 1, bottom: -120 });
        const morphTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: panels,
            start: 'top 10%',
            end: 'bottom 21%',
            scrub: 1,
          },
        });

        morphTimeline
          .to(assistBtn, {
            bottom: 40,
            opacity: 1,
            ease: 'expo',
            // duration: 1
          })
          .to(assistBtn, {
            //y: 10,

            width: 'auto',
            height: 'auto',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            lineHeight: 'normal',
            // backgroundColor: "#00e5ffff",
            // duration: 0.5,
            ease: 'expo',
          })
          .to(assistText, {
            opacity: 1,
            duration: 0.3,
            ease: 'expo',
          });
      },
    });

    gsap.to(assistBtn, {
      scrollTrigger: {
        trigger: document.body,
        start: 'bottom bottom',
        end: '+=1',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      ease: 'expo.out',
      duration: 0.5,
    });
  }

  scrollToTop() {
    document
      .getElementById('Contact')
      ?.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
  }

}
