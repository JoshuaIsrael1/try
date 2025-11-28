import { HeaderNavComponent } from '../header-nav/header-nav.component';

import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
  OnInit,
} from '@angular/core';
import gsap from 'gsap/all';
import { ThemeChangerService } from '../theme-changer.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "../contact-form/contact-form.component";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeaderNavComponent,
    FooterComponent,
    RouterOutlet,
    ContactFormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  mouseX = 0;
  mouseY = 0;
  isDarkMode: any;

  constructor(private el: ElementRef, private theme: ThemeChangerService) { }

  ngOnInit(): void {
    this.theme.darkMode$.subscribe((val) => {
      this.isDarkMode = val;
    });
  }

  ngAfterViewInit() {
    this.animateRing('.ring-1', 8);
    this.animateRing('.ring-2', 10);
    //this.animateRing('.ring-3', 12);

    //    ScrollSmoother.create({
    //   wrapper: '#smooth-wrapper',
    //   content: '#smooth-content',
    //   smooth: 0.5,         // higher = smoother (1.5–2 is good)
    //   effects: true,     // enables data-speed, data-lag, etc.
    // });
  }

  animateRing(selector: string, friction: number) {
    let posX = 0;
    let posY = 0;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: () => {
          posX += (this.mouseX - posX) / friction;
          posY += (this.mouseY - posY) / friction;

          gsap.set(selector, {
            css: {
              left: posX,
              top: posY,
            },
          });
        },
      }
    );
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }
}
