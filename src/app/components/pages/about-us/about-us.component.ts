import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  // Skills
  skills = [
    { name: 'Branding', level: 94 },
    { name: 'Social Marketing', level: 89 },
    { name: 'Copy Writing', level: 90 },
    { name: 'Consulting', level: 70 }
  ];

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {

    const skillsSection = document.querySelector('.skill');
    
    // Add a null check for skillsSection
    if (skillsSection) {
      const position = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (position < windowHeight) {
        this.isScrolled = true;
      }
    }
  }

  // Video Popup
	isOpen = false;
  openPopup(): void {
      this.isOpen = true;
  }
  closePopup(): void {
      this.isOpen = false;
  }

  //Brand Logos
  brands = [
    { image: 'assets/images/brands/brand-1.png', alt: 'brand-1' },
    { image: 'assets/images/brands/brand-2.png', alt: 'brand-2' },
    { image: 'assets/images/brands/brand-3.png', alt: 'brand-3' },
    { image: 'assets/images/brands/brand-4.png', alt: 'brand-4' },
    { image: 'assets/images/brands/brand-5.png', alt: 'brand-5' },
    { image: 'assets/images/brands/brand-6.png', alt: 'brand-6' }
  ];

  brandCarouselOptions = {
    loop: true,
    margin: 50,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 5 },
      1200: { items: 5 }
    }
  };

  //Services
  iconBoxes = [
    {
      icon: 'bi bi-hurricane',
      title: 'Creative Work',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      icon: 'bi bi-highlighter',
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      icon: 'bi bi-globe',
      title: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    }
  ];
}
