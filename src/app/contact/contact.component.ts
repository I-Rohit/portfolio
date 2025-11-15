import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      const templateParams = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        subject: form.value.subject || 'Default Subject',
        message: form.value.message || 'This is a predefined message.',
      };

      emailjs
        .send(
          'service_3knb17n', // Replace with your EmailJS service ID
          'template_8tsdqtf', // Replace with your EmailJS template ID
          templateParams,
          'XTW2YXYNZfACWptwl' // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Message sent successfully!');
          },
          (err) => {
            console.error('Failed to send email:', err);
            alert('Failed to send the message. Please try again later.');
          }
        );
    }
  }
}
