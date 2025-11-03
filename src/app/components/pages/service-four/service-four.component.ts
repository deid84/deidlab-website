import { Component } from '@angular/core';

@Component({
  selector: 'app-service-four',
  templateUrl: './service-four.component.html',
  styleUrl: './service-four.component.css'
})
export class ServiceFourComponent {
  //Services
  services = [
    {
      icon: 'bi bi-pencil',
      title: 'Friendly Codes',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
    },
    {
      icon: 'bi bi-rocket',
      title: 'SEO Optimized',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
    },
    {
      icon: 'bi bi-phone',
      title: 'Fast Support',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula'
    }
  ];
}
