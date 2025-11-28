import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
@Component({
  selector: 'app-section-products',
  imports: [],
  templateUrl: './section-products.component.html',
  styleUrl: './section-products.component.scss'
})
export class SectionProductsComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const wrapper = this.el.nativeElement.querySelector('#wrapper');
    const content = this.el.nativeElement.querySelector('#content');

    // Create smooth scroller
    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      // preventDefault: true
    });

    gsap.set('.heading', {
      yPercent: -150,
      opacity: 1
    });

    // Split text and animate with lag
    const split = new SplitText('.split-stagger', { type: 'words,chars' });
    const chars = split.chars;

    chars.forEach((char, i) => {
      smoother.effects(char, { speed: 1, lag: (i + 4) * 0.1 });
    });
    this.makeIconMove()
    //this.moveImgofSec()
  }

  makeIconMove(){
    gsap.to('.reactIcon',{rotate:360,duration:4,repeat:-1,ease:'back'})
    gsap.to('.techIcon',{y:-30,repeat:-1,ease:'sine.inOut',duration:0.5,yoyo:true,
      stagger:{
        each:0.2
      }
     })
  }

  moveImgofSec(){
    gsap.to('.moveImgs',{
      x:-60,
      borderColor:'green',
      scrollTrigger:{
        trigger:'.moveImgs',
        scrub:true,
        // start:'top bottom',
        // end:'bottom center'
        start: 'top 90%',
end: 'top 40%',

      }

    })
  }


}
