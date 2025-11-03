import { Component } from '@angular/core';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrl: './service-two.component.css'
})
export class ServiceTwoComponent {
  //Services
  services = [
    {
      icon: 'bi bi-chat-text',
      title: 'Friendly Codes',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-star',
      title: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-camera',
      title: 'SEO Optimized',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-display',
      title: 'Fast Support',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-gear',
      title: 'Fully Responsive',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-heptagon',
      title: 'App Development',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }
  ];

  
}
