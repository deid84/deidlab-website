import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  //Services
  serviceItems = [
    {
      img: 'assets/images/about/about-img-7.jpg',
      alt: 'about-1',
      title: 'Professional',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      img: 'assets/images/about/about-img-8.jpg',
      alt: 'about-2',
      title: 'Experienced',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      img: 'assets/images/about/about-img-9.jpg',
      alt: 'about-3',
      title: 'Connected',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    }
  ];
}
