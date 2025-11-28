import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

@Component({
  selector: 'app-srumbler-text-effect',
  imports: [],
  templateUrl: './srumbler-text-effect.component.html',
  styleUrl: './srumbler-text-effect.component.scss'
})
export class SrumblerTextEffectComponent implements AfterViewInit {
finalText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  ngAfterViewInit() {
    this.scrambleText('scrambleText', this.finalText);
    this.moveOverEffect()
  }

moveOverEffect() {
  // Select the text block within this component
  const textBlock = document.querySelector('.text-block');
  if (!textBlock) return;

  // Select the <p> inside the text block
  const p = textBlock.querySelector('p');
  if (!p) return;

  // Split the text into chars
  const st = new SplitText(p, { type: 'chars', charsClass: 'char' });
  const chars = st.chars;

  chars.forEach((char: Element) => {
    const htmlChar = char as HTMLElement;
    gsap.set(htmlChar, { attr: { 'data-content': htmlChar.innerHTML } });
  });

  textBlock.addEventListener('pointermove', (e: Event) => {
    const pointerEvent = e as PointerEvent;
    chars.forEach((char: Element) => {
      const htmlChar = char as HTMLElement;
      const rect = htmlChar.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = pointerEvent.clientX - cx;
      const dy = pointerEvent.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        gsap.to(htmlChar, {
          overwrite: true,
          duration: 1.2 - dist / 100,
          scrambleText: {
            text: htmlChar.getAttribute('data-content') || '',
            chars: '.:',
            speed: 0.5
          },
          ease: 'none'
        });
      }
    });
  });
}

  scrambleText(targetId: string, finalText: string) {
    const el = document.querySelector(`#${targetId} p`);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]<>?';
    let iterations = 0;

    const interval = setInterval(() => {
      const scrambled = finalText
        .split('')
        .map((char, i) => {
          if (i < iterations) return finalText[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (el) el.textContent = scrambled;

      iterations += 1;
      if (iterations > finalText.length) clearInterval(interval);
    }, 40);
  }
}
