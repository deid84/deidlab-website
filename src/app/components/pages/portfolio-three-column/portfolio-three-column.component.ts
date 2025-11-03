import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-three-column',
  templateUrl: './portfolio-three-column.component.html',
  styleUrl: './portfolio-three-column.component.css'
})
export class PortfolioThreeColumnComponent {
  //Works
  works =[
    {
      img:'gallery-1.jpg',
      title:'Digital Food',
      category:'Branding'
    },
    {
      img:'gallery-2.jpg',
      title:'3d Poster',
      category:'AI Design'
    },
    {
      img:'gallery-3.jpg',
      title:'Cube Open Box',
      category:'Branding'
    },
    {
      img:'gallery-4.jpg',
      title:'3d Cube',
      category:'UI/UX Design'
    },
    {
      img:'gallery-5.jpg',
      title:'iPhone',
      category:'AI Design'
    },
    {
      img:'gallery-6.jpg',
      title:'Man with Hat',
      category:'Photography'
    }
  ];
}
