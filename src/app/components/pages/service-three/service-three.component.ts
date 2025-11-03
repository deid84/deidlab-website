import { Component } from '@angular/core';

@Component({
  selector: 'app-service-three',
  templateUrl: './service-three.component.html',
  styleUrl: './service-three.component.css'
})
export class ServiceThreeComponent {
  //Services
  services = [
    {
      icon: 'bi bi-pencil',
      title: 'Friendly Codes',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-rocket',
      title: 'SEO Optimized',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-phone',
      title: 'Fast Support',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-laptop',
      title: 'Fully Responsive',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-globe',
      title: 'App Development',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
      icon: 'bi bi-pie-chart',
      title: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }
  ];
}
