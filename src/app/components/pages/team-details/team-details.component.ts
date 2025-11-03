import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
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

  //Services
  iconStore = [
    {
      icon: 'bi bi-brush',
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      icon: 'bi bi-camera',
      title: 'Angular Development',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    },
    {
      icon: 'bi bi-star',
      title: 'Animation',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
    }
  ];

  //Timeline
  timelineStore = [
    {
      date: 'May 09, 2024',
      title: 'Your Company',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`
    },
    {
      date: 'Oct 10, 2023',
      title: 'Your Company',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`
    },
    {
      date: 'August 31, 2022',
      title: 'Your Company',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.`
    }
  ];
}
