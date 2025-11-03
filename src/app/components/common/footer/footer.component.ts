import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks = [
    { icon: 'bi bi-facebook'},
    { icon: 'bi bi-twitter-x'},
    { icon: 'bi bi-linkedin'},
    { icon: 'bi bi-instagram'}
  ];

  footerMenu1 = [
    { label: 'About Us', url: '/about-us' },
    { label: 'Our Team', url: '/our-team' },
    { label: 'Our Services', url: '/services' },
    { label: 'Coming Soon', url: '/coming-soon' },
    { label: 'Error Page', url: '/404-page' }
  ];

  footerMenu2 = [
    { label: 'Creative Agency', url: '/' },
    { label: 'Digital Studio', url: '/home-two' },
    { label: 'Corporate Business', url: '/home-three' }
  ];
}
