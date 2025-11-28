import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-slide-test',
  imports: [CommonModule],
  templateUrl: './product-slide-test.component.html',
  styleUrl: './product-slide-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSlideTestComponent implements OnInit {
  activeIndex = 0;
  intervalId: any;

  isMobile: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        console.log('Is Mobile:', this.isMobile);
      });
  }

  products = [
    {
      title: 'Aesthetic',
      img: 'box-img/box-asetic.jpg',
      link: '/products/clinic-software',
      description:
        'Our Aesthetic software is an all-in-one platform for dermatology clinics, simplifying billing, appointments, CRM, and prescriptions. With built-in AI, it streamlines workflows and offers smart patient insights for personalized care, boosting clinic efficiency.',
    },
    {
      title: 'Salon with Bocxy Ai',
      img: 'box-img/box-salon.jpg',
      link: '/products/salon-spa-software',
      description:
        'We use Bocxy AI software to effortlessly manage billing, appointments, memberships, and customer tracking in our salon. Its smart AI features provide personalized insights and service reminders, streamlining operations and enhancing client satisfaction.',
    },
    {
      title: 'CRM',
      img: 'box-img/box-crm.jpg',
      link: '/products/crm-software',
      description:
        'Our CRM software centralizes lead management, interaction tracking, and automated follow-ups to streamline sales, marketing, and support. With real-time analytics, it enhances decision-making and customer engagement.',
    },
    {
      title: 'HR & Payroll',
      img: 'box-img/box-hr.jpg',
      link: '/products/hr-and-payroll-software',
      description:
        'Our HR and Payroll software streamlines employee management with attendance tracking, automated salary processing, and tax compliance. Featuring a user-friendly dashboard, it simplifies HR tasks and ensures timely payslips.',
    },
    {
      title: 'Med Spa Software',
      img: 'box-img/box-med-spa.jpg',
      link: '/products/medspa-software',
      description:
        'Our Med Spa Software integrates booking, billing, treatment tracking, and memberships with AI-driven recommendations. It helps spas deliver personalized services, manage staff schedules, and boost client retention effortlessly.',
    },
    {
      title: 'Dermatology Clinic Software',
      img: 'box-img/box-derma.jpg',
      link: '/products/dermatology-clinic-software',
      description:
        'Our Dermatology Clinic Software simplifies patient records, prescriptions, and imaging. With AI-assisted diagnostics and treatment planning, it enhances dermatologists’ efficiency and ensures better patient outcomes.',
    },
  ];

  ngOnInit(): void {
    if (!this.isMobile) this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  startAutoSlide() {
    this.clearAutoSlide(); // prevent multiple intervals
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.products.length;
    }, 2000);
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  pauseAutoSlide() {
    this.clearAutoSlide();
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }

  routeTO(route: any) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.router.navigate([route]);
    console.log('h');
  }

  trackByFn(index: number, item: any) {
    return item.title;
  }
}
