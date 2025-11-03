import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  // OWl Slider
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 2,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
  }

  slideStore = [
    {
      title: "Roland Buford",
      subtitle: "CEO/Founder",
      image: "client-1-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      title: "Karl Casey",
      subtitle: "Photography",
      image: "client-2-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      title: "David Marks",
      subtitle: "Web Developer",
      image: "client-3-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      title: "Lynda Stone",
      subtitle: "Project Lead",
      image: "client-4-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }

  ];

  //Services
  services = [
    {
      icon:'bi-star',
      title:'Marketing',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      icon:'bi-megaphone',
      title:'Development',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      icon:'bi-chat-text',
      title:'Production',
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
  ];
}
