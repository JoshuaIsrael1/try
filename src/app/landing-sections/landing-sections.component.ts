import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImagePinAnimeComponent } from "../image-pin-anime/image-pin-anime.component";

@Component({
  selector: 'app-landing-sections',
  imports: [CommonModule, ImagePinAnimeComponent],
  templateUrl: './landing-sections.component.html',
  styleUrl: './landing-sections.component.scss'
})
export class LandingSectionsComponent {

  faqs: any[] = [
    {
      question: 'What services does your software provide?',
      answer: `Our platform offers complete solutions for clinical and salon businesses, 
             including billing & invoicing, appointment scheduling, inventory management, 
             staff management, and customer relationship tools — all in one system.`
    },
    {
      question: 'Does the software support both clinical and salon billing?',
      answer: `Yes. Our billing module is designed to handle multiple service types, 
             whether you’re running a clinic, salon, or a combination of both. 
             You can generate invoices, apply discounts, and manage GST/Tax compliance easily.`
    },
    {
      question: 'Can I manage my services and staff from the software?',
      answer: `Absolutely. You can add, edit, and organize all your services, 
             assign staff members, track performance, and set service-specific pricing. 
             The system also supports shift scheduling and availability management.`
    },
    {
      question: 'Do you offer online appointment booking?',
      answer: `Yes. Customers can book services online through a branded booking page or app. 
             You can also send automated appointment reminders via SMS or email to reduce no-shows.`
    },
    {
      question: 'Is my business data secure?',
      answer: `We use advanced encryption and secure cloud hosting to protect your data. 
             Only authorized users can access your account, and regular backups ensure your 
             information is always safe.`
    }
  ];

  testimonials: any[] = [
    {
      name: 'Ananya Kapoor',
      initials: 'AK',
      bgColor: '#ffe6e9',
      role: 'SmileCare Dental Clinic',
      text: 'Our billing process is now completely paperless. Patients love the speed and convenience!',
      rating: 5
    },
    {
      name: 'Neha Patel',
      initials: 'NP',
      bgColor: '#e6f7ff',
      role: 'Glam Studio',
      text: 'The appointment booking system is so smooth. Our clients can schedule anytime, anywhere.',
      rating: 4
    },
    {
      name: 'Ravi Sharma',
      initials: 'RS',
      bgColor: '#f0f9eb',
      role: 'Wellness Spa',
      text: 'From staff management to inventory tracking, everything is now in one dashboard.',
      rating: 5
    },
    {
      name: 'Priya Verma',
      initials: 'PV',
      bgColor: '#fff4e6',
      role: 'Elite Hair Lounge',
      text: 'Our revenue reports are ready in seconds. It saves me hours every month!',
      rating: 5
    },
    {
      name: 'Amit Mehra',
      initials: 'AM',
      bgColor: '#f3e6ff',
      role: 'Urban Style Salon',
      text: 'I love the GST-compliant invoices. No more manual calculations.',
      rating: 4
    },
    {
      name: 'Simran Kaur',
      initials: 'SK',
      bgColor: '#e6fff8',
      role: 'Pure Glow Skin Clinic',
      text: 'The customer database feature helps us offer personalized packages. Our sales have improved.',
      rating: 5
    },
    {
      name: 'Ananya Kapoor',
      initials: 'AK',
      bgColor: '#ffe6e9',
      role: 'SmileCare Dental Clinic',
      text: 'Our billing process is now completely paperless. Patients love the speed and convenience!',
      rating: 5
    },
    {
      name: 'Deepak Joshi',
      initials: 'DJ',
      bgColor: '#fffbe6',
      role: 'Gentlemen’s Groom Hub',
      text: 'It’s so easy to train new staff on this system. The UI is clean and intuitive.',
      rating: 4
    }
  ];


  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
