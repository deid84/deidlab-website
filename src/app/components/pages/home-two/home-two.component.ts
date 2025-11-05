import { Component, HostListener } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrl: './home-two.component.css'
})
export class HomeTwoComponent {
  isTransparent = true;
  isMenuOpen = false;
  activeDropdown: number | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(index: number): void {
    this.activeDropdown = this.activeDropdown === index ? null : index;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.activeDropdown = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item') && !target.closest('.header-toggle')) {
      this.activeDropdown = null;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isTransparent = offset < 100;
  }

  //Header End

  //Services
  services = [
    {
      icon: 'bi-eyedropper',
      title: 'Digital Marketing',
      description: 'We blend creativity and technology to build brands that people love.',
    },
    {
      icon: 'bi-fingerprint',
      title: 'Creative Solutions',
      description: 'We blend creativity and technology to build brands that people love.',
    },
    {
      icon: 'bi-gem',
      title: 'App Development',
      description: 'We blend creativity and technology to build brands that people love.',
    },
  ];

  //Team
  teamMembers = [
    {
      image: 'assets/images/team/team-1.jpg',
      name: 'Nicholas Hart',
      role: 'Web Developer',
      socials: [
        { icon: 'bi-facebook', url: '#' },
        { icon: 'bi-twitter-x', url: '#' },
        { icon: 'bi-linkedin', url: '#' },
      ],
    },
    {
      image: 'assets/images/team/team-2.jpg',
      name: 'Grace Ross',
      role: 'Lead Marketing',
      socials: [
        { icon: 'bi-facebook', url: '#' },
        { icon: 'bi-twitter-x', url: '#' },
        { icon: 'bi-linkedin', url: '#' },
      ],
    },
    {
      image: 'assets/images/team/team-3.jpg',
      name: 'Bobby Castro',
      role: 'Project Lead',
      socials: [
        { icon: 'bi-facebook', url: '#' },
        { icon: 'bi-twitter-x', url: '#' },
        { icon: 'bi-linkedin', url: '#' },
      ],
    },
    {
      image: 'assets/images/team/team-4.jpg',
      name: 'Luara Prior',
      role: 'Data Scientist',
      socials: [
        { icon: 'bi-facebook', url: '#' },
        { icon: 'bi-twitter-x', url: '#' },
        { icon: 'bi-linkedin', url: '#' },
      ],
    },
  ];

  //Works
  works =[
    {
      img:'gallery-1.jpg',
      title:'Digital Food',
      category:'Branding'
    },
    {
      img:'gallery-2.jpg',
      title:'Poster',
      category:'Branding'
    },
    {
      img:'gallery-3.jpg',
      title:'Blue Berry',
      category:'Branding'
    },
    {
      img:'gallery-4.jpg',
      title:'Death Proof',
      category:'UI/UX Design'
    }
  ];

  socialIcons = [
    { name: 'facebook', icon: 'facebook' },
    { name: 'twitter', icon: 'twitter-x' },
    { name: 'pinterest', icon: 'pinterest' },
    { name: 'instagram', icon: 'instagram' }
  ];

  //Blogs
  blogItems = [
    {
      image: 'assets/images/blogs/blog-md-1.jpg',
      alt: '01',
      category: 'Branding',
      title: "It's Like Dating Entertainment",
      date: 'Apr 29, 2025',
      link: '/blog-grid',
    },
    {
      image: 'assets/images/blogs/blog-md-2.jpg',
      alt: '02',
      category: 'Design',
      title: 'Out of The Ruins',
      date: 'Apr 28, 2025',
      link: '/blog-grid',
    },
    {
      image: 'assets/images/blogs/blog-md-3.jpg',
      alt: '03',
      category: 'Marketing',
      title: 'Woman Lifestyle',
      date: 'Apr 27, 2025',
      link: '/blog-grid',
    },
    {
      image: 'assets/images/blogs/blog-md-4.jpg',
      alt: '04',
      category: 'Education',
      title: 'Photography Techniques',
      date: 'Apr 27, 2025',
      link: '/blog-grid',
    },
  ];

  customOptions = {
    loop: true,
    margin: 24,
    autoplay: true,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 3 },
    },
  };
}
