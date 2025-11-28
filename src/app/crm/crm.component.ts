import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crm',
  imports: [CommonModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  faqs = [
    {
      q: "What exactly is Bocxy's CRM software and who is it for?",
      a: "Bocxy's CRM software (Customer Relationship Management) is a comprehensive solution designed for salons, spas, dermatology clinics, med spas, and other wellness centers. It helps you manage all aspects of your client relationships, from initial contact and booking to ongoing engagement and loyalty, ensuring a personalized experience for every client.",
    },
    {
      q: 'How does Bocxy’s CRM help improve client loyalty and retention?',
      a: 'Our CRM software is built to foster strong client relationships. It allows you to create detailed client profiles, track their service history and preferences, and send personalized communications like birthday wishes, re-booking reminders, and post-service follow-ups. By recognizing and rewarding loyalty through integrated programs, Bocxy helps you significantly improve client retention and build lasting relationships.',
    },
    {
      q: 'Can Bocxy’s CRM help me with marketing my services?',
      a: 'Absolutely! Bocxy\'s CRM software includes robust marketing & loyalty tools. You can launch automated email and SMS campaigns, promote special offers to segmented client groups, and manage client loyalty programs directly from the platform. This helps you attract new clients and re-engage existing ones more effectively, boosting your revenue.',
    },
    {
      q: 'Is the client data within Bocxy’s CRM secure and compliant with privacy regulations?',
      a: 'Yes, data security and compliance are paramount. Bocxy\'s CRM software operates within our secure, all-in-one platform, which is designed with state-of-the-art encryption for data protection.',
    },
    {
      q: "How does the CRM integrate with Bocxy's salon booking system?",
      a: "Bocxy's CRM software is seamlessly integrated with our salon booking system. When a client books an appointment, their details are automatically updated in their CRM profile. This unified approach ensures that all client interactions, from scheduling to service history and communication, are centralized, providing a complete 360-degree view of each client.",
    },
    {
      q: 'Can I access client information from the CRM on my mobile device?',
      a: 'Yes. Bocxy provides a dedicated salon booking app and mobile access for on-the-go management. This means you can view client details, track performance, and manage aspects of your CRM directly from your smartphone or tablet, giving you flexibility and accessibility wherever you are.',
    },
  ];
}