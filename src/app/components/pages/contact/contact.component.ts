import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Contact Form
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  // EmailJS service configuration
  private serviceId = 'helifax-form';  // Replace with your EmailJS Service ID
  private templateId = 'helifax-form';  // Replace with your EmailJS Template ID
  private publicKey = 'dOfh1ImCGDZCO9GJb';  // Replace with your EmailJS Public Key

  // Method to send email on form submission
  public sendEmail(event: Event): void {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(this.serviceId, this.templateId, event.target as HTMLFormElement, this.publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          alert('Message sent successfully. Thank you, we will get back to you soon!');
          this.resetForm();
        },
        (error: EmailJSResponseStatus) => {
          console.error('Failed to send message. Error:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  }

  // Method to reset the form after submission
  private resetForm(): void {
    this.formData = {
      user_name: '',
      user_email: '',
      message: ''
    };
  }
}
