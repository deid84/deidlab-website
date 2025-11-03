import { Component, HostListener} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrl: './home-one.component.css'
})
export class HomeOneComponent {
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
      icon: 'bi bi-camera',
      title: 'Branding',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis'
    },
    {
      icon: 'bi bi-globe',
      title: 'Development',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis'
    },
    {
      icon: 'bi bi-pen',
      title: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis'
    }
  ];

  // Funfacts
  funFacts =[
    {
      number: 14,
      desc: "Years of experience",
      displayedNumber: 0
    },
    {
      number: 100,
      desc: "Statisfy Clients",
      displayedNumber: 0
    },
    {
      number: 500,
      desc: "Projects Won",
      displayedNumber: 0
    }
  ]

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    this.funFacts.forEach(fact => {
      this.animateCounter(fact);
    });
  }

  animateCounter(fact: any): void {
    const duration = 4000; 
    const intervalTime = 50; 
    const increment = fact.number / (duration / intervalTime);

    const interval = setInterval(() => {
      fact.displayedNumber += increment;
      if (fact.displayedNumber >= fact.number) {
        fact.displayedNumber = fact.number;
        clearInterval(interval); 
      }
    }, intervalTime);
  }

  // Skills
  skills = [
    { name: 'UI/UX Design', level: 85 },
    { name: 'Development', level: 99 }
  ];

  isScrolled = false;

  // OWl Slider
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
  }

  slideStore = [
    {
      title: "Anny Adams",
      subtitle: "CEO/Founder",
      image: "client-1-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      title: "Bryan Matt",
      subtitle: "Developer",
      image: "client-2-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },

    {
      title: "David Marks",
      subtitle: "Designer",
      image: "client-3-md.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }

  ];

  // Clients
  clients = [
    { img: 'assets/images/brands/brand-1.png', alt: '01' },
    { img: 'assets/images/brands/brand-2.png', alt: '02' },
    { img: 'assets/images/brands/brand-3.png', alt: '03' },
    { img: 'assets/images/brands/brand-4.png', alt: '04' },
    { img: 'assets/images/brands/brand-5.png', alt: '05' },
    { img: 'assets/images/brands/brand-6.png', alt: '06' }
  ];

  //Team
  teams = [
    {
      img:'team-1.jpg',
      name:'Dan Demarco',
      designation:'Founder'
    },
    {
      img:'team-2.jpg',
      name:'Brenda Johnson',
      designation:'Manager'
    },
    {
      img:'team-3.jpg',
      name:'Andy Murphy',
      designation:'Senior Designer'
    }
  ];
  socialLinks = [
    { url: '#', class: 'link-social-facebook', icon: 'bi bi-facebook' },
    { url: '#', class: 'link-social-twitter', icon: 'bi bi-twitter-x' },
    { url: '#', class: 'link-social-linkedin', icon: 'bi bi-linkedin' }
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

  // Contact Form
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  // EmailJS service configuration
  private serviceId = 'helifax-form';  // Replace with your EmailJS Service ID
  private templateId = 'helifax-form';  // Replace with your EmailJS Template ID
  private publicKey = 'dOfh1ImCGDZCO9GJb';  // Replace with your EmailJS Public Key

  // Method to send email on form submission
  public sendEmail(event: Event): void {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(this.serviceId, this.templateId, event.target as HTMLFormElement, this.publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          alert('Message sent successfully. Thank you, we will get back to you soon!');
          this.resetForm();
        },
        (error: EmailJSResponseStatus) => {
          console.error('Failed to send message. Error:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  }

  // Method to reset the form after submission
  private resetForm(): void {
    this.formData = {
      user_name: '',
      user_email: '',
      message: ''
    };
  }
}
