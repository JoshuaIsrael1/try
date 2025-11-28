import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    private router: Router
  ) { }

  routeTo(el: any) {

    switch (el) {
      case 'P&P':
        this.router.navigate(['privacy-policy'])
        this.scrollTop()
        break;
      case 'R&P':
        this.router.navigate(['privacy-policy'])
        this.scrollTop()

        break;
      case 'Contact':
        document
          .getElementById('Contact')
          ?.scrollIntoView({
            behavior: 'smooth',
            // inline: '',
            block: 'start',
          });
        break;
      default:
        console.warn('out of param');

    }
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
}
