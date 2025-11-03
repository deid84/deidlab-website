import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-four-column',
  templateUrl: './portfolio-four-column.component.html',
  styleUrl: './portfolio-four-column.component.css'
})
export class PortfolioFourColumnComponent {
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
    },
    {
      img:'gallery-5.jpg',
      title:'3d Design',
      category:'Media'
    },
    {
      img:'gallery-6.jpg',
      title:'Muse + Metta',
      category:'Development'
    },
    {
      img:'gallery-7.jpg',
      title:'3d Design',
      category:'Media'
    },
    {
      img:'gallery-8.jpg',
      title:'Muse + Metta',
      category:'Development'
    }
  ];
}
