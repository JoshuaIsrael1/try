import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeChangerService } from '../theme-changer.service';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';




@Component({
  selector: 'app-header-nav',
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent implements OnInit {
  navItems = ['About', 'Products', 'Services', 'Contact', 'Resources'];
  // navItems = ['About', 'Products', 'Services', 'Contact', 'Resources', 'New Blogs', 'Demos'];
  productDropDown: any = [
    'Aesthetic',
    'Salon with Bocxy Ai',
    'CRM',
    'HR & Payroll',
    'Med Spa Software',
    'Dermatology Clinic Software',
  ];
  serviceDropDown: any = [
    'Integrated Management System',
    'Enterprise Resource Planning',
    'Customised Busniess Solutions',
    // 'Future of Aesthetic Clinics',
  ];

  // 🟢 Added Resources dropdown
  resourceDropDown: any = [
    'New Blogs',
    'Salon Demo',
    'Aesthetic Demo'
  ];

  isDarkMode: any = false;
  isHeaderVisible = true;
  private lastScrollTop = 0;

  constructor(
    private theme: ThemeChangerService,
    private router: Router,
    private productSev: ProductsService
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
  }

  iconMap: { [key: string]: { icon: string; color: string } } = {
    // Products
    Aesthetic: { icon: 'bi-palette', color: '#ec4899' },
    'Salon with Bocxy Ai': { icon: 'bi-scissors', color: '#f97316' },
    CRM: { icon: 'bi-bar-chart', color: '#3b82f6' },
    'HR & Payroll': { icon: 'bi-person-badge', color: '#22c55e' },
    'Med Spa Software': { icon: 'bi-heart-pulse', color: '#e11d48' },
    'Dermatology Clinic Software': { icon: 'bi-capsule', color: '#6366f1' },

    // Services
    'Integrated Management System': { icon: 'bi-diagram-3', color: '#14b8a6' },
    'Enterprise Resource Planning': { icon: 'bi-building', color: '#facc15' },
    'Customised Busniess Solutions': { icon: 'bi-sliders', color: '#0ea5e9' },
    'Future of Aesthetic Clinics': { icon: 'bi-stars', color: '#f472b6' },

    // 🟢 Resources icons
    'New Blogs': { icon: 'bi-journal-text', color: '#17a2b8' },
    'Salon Demo': { icon: 'bi-play-circle', color: '#0d6efd' },
    'Aesthetic Demo': { icon: 'bi-film', color: '#6c757d' },
  };

  toggleTheme() {
    this.theme.toggleTheme();
    this.isDarkMode = this.theme.isDarkMode();
  }

  routeTo(route: any, option: any) {
    this.toggleMenuBar();

    console.log(route);
    if (route == 'Aesthetic') {
      this.router.navigate(['products/clinic-software']);
    } else if (route == 'Salon with Bocxy Ai') {
      this.router.navigate(['products/salon-spa-software']);
    } else if (route == 'CRM') {
      this.router.navigate(['products/crm-software']);
    } else if (route == 'HR & Payroll') {
      this.router.navigate(['products/hr-and-payroll-software']);
    } else if (route == 'Med Spa Software') {
      this.router.navigate(['products/medspa-software']);
    } else if (route == 'Dermatology Clinic Software') {
      this.router.navigate(['products/dermatology-clinic-software']);
    } else if (route == 'Integrated Management System') {
      this.router.navigate(['services/System-integrated-management-system']);
    } else if (route == 'Enterprise Resource Planning') {
      this.router.navigate(['services/enterprise-resource-planning']);
    } else if (route == 'Customised Busniess Solutions') {
      this.router.navigate(['services/customised-busniess-solutions']);
    } else if (route == 'Future of Aesthetic Clinics') {
      this.router.navigate(['services/future-of-aesthetic-clinics']);
    }

    // 🟢 Add routing for Resources
    else if (route == 'New Blogs') {
      this.router.navigate(['new-blogs']);
    } else if (route == 'Salon Demo') {
      this.router.navigate(['demo-salon']);
    } else if (route == 'Aesthetic Demo') {
      this.router.navigate(['demo-aesthetic']);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  scrollTo(ele: any) {
    this.toggleMenuBar();

    if (ele == 'Careers') {
      let scrollElm = document.getElementById(ele);
      if (scrollElm) scrollElm.scrollIntoView({ behavior: 'instant' });
    } else if (ele == 'About') {
      this.router.navigate(['']);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (ele == 'Products') {
      this.router.navigate(['/products']);
    } else if (ele == 'Services') {
      this.router.navigate(['/service']);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (ele == 'Contact') {
      document.getElementById('Contact')?.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    } else if (ele == 'New Blogs') {
      this.router.navigate(['/new-blogs']);
    } else if (ele == 'Demos') {
      this.router.navigate(['/demos']);
    }
  }

  isMenuBarOpen: boolean = false;

  toggleMenuBar() {
    this.isMenuBarOpen = !this.isMenuBarOpen;
  }
  isProductsOpen: boolean = false;

  toggleProducts() {
    this.isProductsOpen = !this.isProductsOpen;
  }

  dropdownStates: { [key: string]: boolean } = {
    Products: false,
    Services: false,
    // 🟢 Add Resources dropdown toggle state
    Resources: false,
  };

  toggleDropdown(name: string) {
    this.dropdownStates[name] = !this.dropdownStates[name];
  }

  isDropdownOpen(name: string): boolean {
    return this.dropdownStates[name];
  }

  getDropdownItems(name: string): string[] {
    if (name === 'Products') return this.productDropDown;
    if (name === 'Services') return this.serviceDropDown;
    // 🟢 Added support for Resources
    if (name === 'Resources') return this.resourceDropDown;
    return [];
  }
}
