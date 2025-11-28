import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landing-sec/landing-sec.component').then(
            (m) => m.LandingSecComponent
          ),
      },
      {
        path: 'carrer',
        loadComponent: () =>
          import('./image-pin-anime/image-pin-anime.component').then(
            (m) => m.ImagePinAnimeComponent
          ),
      },
      {
        path: 'new-blogs',
        loadComponent: () =>
          import('./future-aesthetic/future-aesthetic.component').then(
            (m) => m.FutureAestheticComponent
          ),
      },
      {
        path: 'demos',
        loadComponent: () =>
          import('./salon-demo-video/salon-demo-video.component').then(
            (m) => m.SalonDemoVideoComponent
          ),
      },
      {
        path: 'demo-salon',
        loadComponent: () =>
          import('./salon-demo-video/salon-demo-video.component').then(
            (m) => m.SalonDemoVideoComponent
          ),
      },
      {
        path: 'demo-aesthetic',
        loadComponent: () =>
          import('./aesthic-demo-video/aesthic-demo-video.component').then(
            (m) => m.AesthicDemoVideoComponent
          ),
      },
      {
        path: 'products/clinic-software',
        loadComponent: () =>
          import('./aesthetic/aesthetic.component').then(
            (m) => m.AestheticComponent
          ),
      },
      // {
      //   path: 'products/aesthetic-clinic-software',
      //   loadComponent: () =>
      //     import('./aesthetic/aesthetic.component').then(
      //       (m) => m.AestheticComponent
      //     ),
      // },
      {
        path: 'products/hr-and-payroll-software',
        loadComponent: () =>
          import('./hr-and-payroll/hr-and-payroll.component').then(
            (m) => m.HrAndPayrollComponent
          ),
      },
      {
        path: 'products/salon-spa-software',
        loadComponent: () =>
          import('./salon/salon.component').then((m) => m.SalonComponent),
      },
      {
        path: 'products/crm-software',
        loadComponent: () =>
          import('./crm/crm.component').then((m) => m.CrmComponent),
      },
      {
        path: 'products/medspa-software',
        loadComponent: () =>
          import('./mega-spa-products/mega-spa-products.component').then(
            (m) => m.MegaSpaProductsComponent
          ),
      },
      {
        path: 'products/dermatology-clinic-software',
        loadComponent: () =>
          import('./derma-clinic/derma-clinic.component').then(
            (m) => m.DermaClinicComponent
          ),
      },
      {
        path: 'services/System-integrated-management-system',
        loadComponent: () =>
          import('./ims/ims.component').then((m) => m.ImsComponent),
      },
      {
        path: 'services/enterprise-resource-planning',
        loadComponent: () =>
          import('./erp/erp.component').then((m) => m.ErpComponent),
      },
      {
        path: 'services/customised-busniess-solutions',
        loadComponent: () =>
          import('./cbs/cbs.component').then((m) => m.CbsComponent),
      },
      {
        path: 'services/future-of-aesthetic-clinics',
        loadComponent: () =>
          import('./future-aesthetic/future-aesthetic.component').then(
            (m) => m.FutureAestheticComponent
          ),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./terms-and-conditions/terms-and-conditions.component').then(
            (m) => m.TermsAndConditionsComponent
          ),
      },

    ],
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./success-contact/success-contact.component').then(
        (m) => m.SuccessContactComponent
      ),
  },
];
