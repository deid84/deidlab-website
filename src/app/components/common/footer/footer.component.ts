import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks = [
    // { icon: 'bi-facebook', class: 'button-circle-social-facebook'},
    // { icon: 'bi-twitter-x', class: 'button-circle-social-twitter'},
    { icon: 'bi-linkedin', class: 'button-circle-social-linkedin'},
    // { icon: 'bi-instagram', class: 'button-circle-social-instagram'},
  ];

  year: number = new Date().getFullYear();
}
