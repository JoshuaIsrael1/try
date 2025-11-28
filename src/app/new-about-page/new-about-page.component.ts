import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-about-page',
  imports: [CommonModule],
  templateUrl: './new-about-page.component.html',
  styleUrls: ['./new-about-page.component.scss']
})
export class NewAboutPageComponent {

  constructor(
    private router: Router
  ) { }

  faqs = [
    {
      q: "What is Bocxy and how does it help my business?",
      a: "Bocxy is a smart digital platform designed for salons, spas, aesthetic clinics, and wellness businesses..."
    },
    {
      q: "Does Bocxy offer customer relationship management (CRM) software?",
      a: "Yes! Bocxy provides a built-in customer relationship management system..."
    },
    {
      q: "Can I manage staff and payroll using Bocxy?",
      a: "Absolutely. Bocxy offers HR and payroll software to simplify employee scheduling..."
    },
    {
      q: "Is Bocxy suitable for aesthetic and wellness clinics?",
      a: "Yes, Bocxy has dedicated aesthetic clinic software and beauty & wellness clinic software..."
    },
    {
      q: "How can Bocxy improve customer experience?",
      a: "With automated booking, digital payments, loyalty programs, and personalized communication..."
    },
    {
      q: "Is Bocxy easy to use for small businesses?",
      a: "Yes, Bocxy is built with a simple and localized interface tailored for Indian businesses..."
    },
    {
      q: "Does Bocxy support online payments and digital receipts?",
      a: "Yes, Bocxy supports secure digital transactions, invoices, and receipts..."
    },
    {
      q: "Can Bocxy help me grow my business revenue?",
      a: "Definitely. By automating bookings, improving customer retention, optimizing staff productivity..."
    }
  ];

  routeTO(route: any) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    this.router.navigate([route])
  }
}
