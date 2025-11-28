import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerServiceService } from '../services/spinner-service.service';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, MaterialModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements AfterViewInit, OnInit {

  contactForm !: FormGroup

  constructor(private router: Router, private fb: FormBuilder,
    private api: EmailService,
    public spinner: SpinnerServiceService,

  ) {

  }

  showPopup = false;
  popupMessage = '';


  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    const form = this.contactForm;
    if (form.valid) {
      this.spinner.show()

      console.log('Form Submitted:', form.value);
      this.api.sendMail(form.value).subscribe({
        next: (res) => {
          this.spinner.hide()

          console.log('Email sent successfully!', res);
          this.showPopupMessage('Email sent successfully!');
          this.router.navigate(['/success']);
          form.reset();
        },
        error: (err) => {
          this.spinner.hide()

          console.error('Error sending email:', err);
          this.showPopupMessage('Failed to send email. Please try again.');

        }
      });



    } else {
      // Check individual errors
      if (form.controls['name'].invalid) {
        this.showPopupMessage('Name is required!');
      } else if (form.controls['email'].invalid) {
        this.showPopupMessage('Please enter a valid email!');
      }

      // else if (form.controls['phone'].invalid) {
      //   this.showPopupMessage('Phone number is required!');
      // }
      else if (form.controls['message'].invalid) {
        this.showPopupMessage('message is required!');
      }
    }
  }

  showPopupMessage(msg: string) {
    this.popupMessage = msg;
    this.showPopup = true;

    setTimeout(() => {
      this.showPopup = false;
    }, 2500); // hide after 2.5s
  }


  @ViewChild('box1') box1!: ElementRef;
  @ViewChild('box2') box2!: ElementRef;
  @ViewChild('box3') box3!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit() {
    this.startRandomMovement(this.box1.nativeElement);
    this.startRandomMovement(this.box2.nativeElement);
    this.startRandomMovement(this.box3.nativeElement);
  }

  startRandomMovement(element: HTMLElement) {
    const container = this.container.nativeElement;

    const move = () => {
      const containerRect = container.getBoundingClientRect();
      const elemRect = element.getBoundingClientRect();

      const maxX = container.clientWidth - elemRect.width;
      const maxY = container.clientHeight - elemRect.height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      element.style.transform = `translate(${randomX}px, ${randomY}px)`;

      setTimeout(move, 5000); // match the CSS transition duration
    };

    move();
  }
}
