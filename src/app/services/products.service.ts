import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  // options = [
  //   {
  //     // background: 'url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)',
  //     background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
  //     icon: 'fa-solid fa-user-doctor',
  //     main: 'Aesthetic',
  //     sub: 'Our Aesthetic software is an all-in-one platform for dermatology clinics, simplifying billing, appointments, CRM, and prescriptions. With built-in AI, it streamlines workflows and offers smart patient insights for personalized care, boosting clinic efficiency.',
  //     img: 'canva-pic/1.png'
  //   },
  //   {
  //     background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
  //     icon: 'fas 	fa-scissors',
  //     main: 'Salon with Bocxy Ai',
  //     sub: 'We use Bocxy AI software to effortlessly manage billing, appointments, memberships, and customer tracking in our salon. Its smart AI features provide personalized insights and service reminders, streamlining operations and enhancing client satisfaction. Bocxy makes salon management simple, efficient, and future-ready.',
  //     img: 'canva-pic/3.png'

  //   },
  //   {
  //     background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
  //     icon: 'fas fa-chart-line',
  //     main: 'CRM',
  //     sub: 'Our CRM software centralizes lead management, interaction tracking, and automated follow-ups to streamline sales, marketing, and support. With real-time analytics, it enhances decision-making and customer engagement. Designed for growth, it boosts productivity and fosters lasting client relationships.',
  //     img: 'canva-pic/2.png'

  //   },
  //   {
  //     background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
  //     icon: 'fas fa-id-badge',
  //     main: 'HR & Payroll',
  //     sub: 'Our HR and Payroll software streamlines employee management with attendance tracking, automated salary processing, and tax compliance. Featuring a user-friendly dashboard, it simplifies HR tasks and ensures timely payslips. Designed for growth, it supports scalable workforce management for businesses.',
  //     img: 'canva-pic/6.png'

  //   },
  //   // {
  //   //   background: 'url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)',
  //   //   icon: 'fas fa-sun',
  //   //   main: 'Inatethi',
  //   //   sub: 'Omuke trughte a otufta'
  //   // }
  // ];

  options = [
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fa-solid fa-user-doctor',
      main: 'Aesthetic',
      sub: 'Our Aesthetic software is an all-in-one platform for dermatology clinics, simplifying billing, appointments, CRM, and prescriptions. With built-in AI, it streamlines workflows and offers smart patient insights for personalized care, boosting clinic efficiency.',
      img: 'canva-pic/1.png'
    },
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fas fa-scissors',
      main: 'Salon with Bocxy Ai',
      sub: 'We use Bocxy AI software to effortlessly manage billing, appointments, memberships, and customer tracking in our salon. Its smart AI features provide personalized insights and service reminders, streamlining operations and enhancing client satisfaction.',
      img: 'canva-pic/3.png'
    },
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fas fa-chart-line',
      main: 'CRM',
      sub: 'Our CRM software centralizes lead management, interaction tracking, and automated follow-ups to streamline sales, marketing, and support. With real-time analytics, it enhances decision-making and customer engagement.',
      img: 'canva-pic/2.png'
    },
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fas fa-id-badge',
      main: 'HR & Payroll',
      sub: 'Our HR and Payroll software streamlines employee management with attendance tracking, automated salary processing, and tax compliance. Featuring a user-friendly dashboard, it simplifies HR tasks and ensures timely payslips.',
      img: 'canva-pic/6.png'
    },
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fas fa-spa',
      main: 'Med Spa Software',
      sub: 'Our Med Spa Software integrates booking, billing, treatment tracking, and memberships with AI-driven recommendations. It helps spas deliver personalized services, manage staff schedules, and boost client retention effortlessly.',
      img: 'canva-pic/2.png'
    },
    {
      background: 'linear-gradient(145deg,rgba(255, 67, 198, 0.479),rgba(0, 211, 226, 0.541))',
      icon: 'fas fa-stethoscope',
      main: 'Dermatology Clinic Software',
      sub: 'Our Dermatology Clinic Software simplifies patient records, prescriptions, and imaging. With AI-assisted diagnostics and treatment planning, it enhances dermatologists’ efficiency and ensures better patient outcomes.',
      img: 'canva-pic/2.png'
    }
  ];

  productTemplateData = signal<any>(null)

  setproductTemplateData(data: any) {
    console.log(data);

    this.productTemplateData.set(data)
  }

  getproductTemplateData() {
    return this.productTemplateData()
  }

  getUniqueProduct(items: any) {
    const found = this.options.find((i: any) => items === i.main);

    console.log(items, found);
    return found;
  }

  phoneNumber: string = '+919787897873';

  getPhoneLink(): string {
    return `tel:${this.phoneNumber}`;
  }
}
