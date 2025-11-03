import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrl: './home-three.component.css'
})
export class HomeThreeComponent {
  // OWl Slider
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
  }

  slideStore = [
    {
      title: "Building Big Dreams with Small Teams, We Think as One. We Work as One",
      image: "assets/images/slides/slide-1.jpg"
    },

    {
      title: "Driven by Ideas. United by Passion, From Concepts to Creations We're In Sync",
      image: "assets/images/slides/slide-2.jpg"
    },

    {
      title: "Power in Unity. Strength in Skill, Collaborate. Innovate. Elevate",
      image: "assets/images/slides/slide-3.jpg"
    }

  ];

  //Testimonials
  testimonials = [
    {
      image: 'assets/images/testimonials/client-1-md.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Jessica Wilson',
      designation: 'Sr Manager'
    },
    {
      image: 'assets/images/testimonials/client-2-md.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'David Garcia',
      designation: 'Sr Developer'
    },
    {
      image: 'assets/images/testimonials/client-3-md.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Robert Williams',
      designation: 'Animator'
    },
    {
      image: 'assets/images/testimonials/client-4-md.jpg',
      feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      name: 'Ashley Rodriguez',
      designation: 'CEO/Founder'
    }
  ];

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

  // Video Popup
	isOpen = false;
  openPopup(): void {
      this.isOpen = true;
  }
  closePopup(): void {
      this.isOpen = false;
  }

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

  //Blogs
  blogs = [
    {
      date: '04',
      month: 'April',
      title: 'Clean Code, Bold Design',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'assets/images/blogs/blog-wide-1.jpg',
      link: '/blog-grid'
    },
    {
      date: '03',
      month: 'May',
      title: 'Web Templates That Sell',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'assets/images/blogs/blog-wide-2.jpg',
      link: '/blog-grid'
    },
    {
      date: '02',
      month: 'June',
      title: 'Bootstrap Templates Pack',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      image: 'assets/images/blogs/blog-wide-3.jpg',
      link: '/blog-grid'
    }
  ];

  //Footer
  footerLinks = [
    { label: 'Terms and Conditions', link: '/terms' },
    { label: 'Careers', link: '/careers' },
    { label: 'Clients', link: '/clients' }
  ];

  contactInfo = [
    'Patton Street Caulfield East VIC 3145',
    'yoursite@domain.com'
  ];

  socialLinks = [
    { icon: 'bi bi-facebook', class: 'button-circle-social-facebook'},
    { icon: 'bi bi-twitter-x', class: 'button-circle-social-twitter'},
    { icon: 'bi bi-linkedin', class: 'button-circle-social-linkedin'}
  ];

}
