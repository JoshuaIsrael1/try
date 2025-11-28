import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { SpinnerServiceService } from './services/spinner-service.service';
import { filter } from 'rxjs';

declare var fbq: Function;

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    // HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    public spinner: SpinnerServiceService,
    private router: Router
  ) { }
  title = 'bocxy';
  ngOnInit(): void {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (typeof fbq === 'function') {
          fbq('track', 'PageView');
        }
      });

    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

}
