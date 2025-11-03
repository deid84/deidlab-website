import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrl: './portfolio-detail.component.css'
})
export class PortfolioDetailComponent {

  // OWl Slider
    brandsCarousel: OwlOptions = {
      loop: true,
      dots: false,
      margin:50,
      nav:true,
      autoplay:true,
      autoplaySpeed: 2000,
      navSpeed: 2000,
      items: 3,
      navText: ['<i class="bi bi-arrow-left-short"></i>', '<i class="bi bi-arrow-right-short"></i>'],
    }
  
    brandStore = [
      {img: "brand-1.png"},
      {img: "brand-2.png"},
      {img: "brand-3.png"},
      {img: "brand-4.png"},
      {img: "brand-5.png"},
      {img: "brand-6.png"}
    ];
}
