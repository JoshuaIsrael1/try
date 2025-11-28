import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';
// import { ScrollSmoother, SplitText } from 'gsap/all';
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeChangerService } from '../theme-changer.service';
import { CommonModule } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-layer-logo',
  imports: [CommonModule],
  templateUrl: './layer-logo.component.html',
  styleUrl: './layer-logo.component.scss',
})
export class LayerLogoComponent implements AfterViewInit, OnInit {
  isDarkMode: any;
  constructor(private el: ElementRef, private theme: ThemeChangerService) { }

  ngOnInit(): void {
    this.theme.darkMode$.subscribe((val) => {
      this.isDarkMode = val;
    });
  }

  ngAfterViewInit(): void {
    this.textLayering();
  }
  textLayering() {
    const layers = this.el.nativeElement.querySelectorAll(
      '.text-container p:not(:first-child)'
    );
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        layers.forEach((el: HTMLElement) => {
          const speed = parseFloat(el.dataset['speed'] || '0.5');
          gsap.to(el, {
            y: `${speed * 50}px`,
            ease: 'sine',
            scrollTrigger: {
              trigger: el,
              scrub: true,
              // markers: true,
              start: 'top 0%',
              end: 'bottom 90%',
            },
          });
        });
      },

      '(max-width: 1024px)': () => {
        layers.forEach((el: HTMLElement) => {
          const speed = parseFloat(el.dataset['speed'] || '1');
          gsap.to(el, {
            y: `${speed * 52}px`,
            ease: 'sine',
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: 'top 40%',
              end: 'bottom 21%',
            },
          });
        });
      },
    });
  }
}
