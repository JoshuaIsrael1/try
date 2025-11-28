import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-success-contact',
  imports: [CommonModule, MaterialModule],
  templateUrl: './success-contact.component.html',
  styleUrl: './success-contact.component.scss'
})
export class SuccessContactComponent implements AfterViewInit {
  icons = [
    'fa-thumbs-up', 'fa-smile', 'fa-heart', 'fa-star', 'fa-paper-plane',
    'fa-check-circle', 'fa-gift', 'fa-fire', 'fa-trophy', 'fa-lightbulb',
    'fa-heart-circle', 'fa-award', 'fa-grin-stars', 'fa-hand-peace'
  ];

  colors = ['#ff6b6bb6', '#ffd83db6', '#6bcb78b6', '#4d97ffb6', '#ff6ec7b6', '#ffa600b6', '#892be2b6'];

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.icon-animation i');
    elements.forEach((el: any) => {
      // Random horizontal start position
      const x = Math.random() * 100; // percent
      el.style.left = x + '%';

      // Random animation duration
      const duration = 2 + Math.random() * 2 + 's';
      el.style.animationDuration = duration;

      // Random animation delay
      const delay = Math.random() * 3 + 's';
      el.style.animationDelay = delay;

      // Random color from palette
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      el.style.color = color;

      // Random size
      const size = 20 + Math.random() * 20; // 20px → 40px
      el.style.fontSize = size + 'px';
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}