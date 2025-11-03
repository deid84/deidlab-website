import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  // Team Members
  teamStore = [
    { name: 'Nicholas Hart', role: 'Designer', img: 'assets/images/team/team-1-sm.jpg' },
    { name: 'Grace Ross', role: 'Designer', img: 'assets/images/team/team-2-sm.jpg' },
    { name: 'Bobby Castro', role: 'Designer', img: 'assets/images/team/team-3-sm.jpg' },
    { name: 'Luara Prior', role: 'Designer', img: 'assets/images/team/team-4-sm.jpg' },
    { name: 'Karl Casey', role: 'Designer', img: 'assets/images/team/team-5-sm.jpg' },
    { name: 'Roland Buford', role: 'Designer', img: 'assets/images/team/team-6-sm.jpg' },
    { name: 'David Marks', role: 'Designer', img: 'assets/images/team/team-7-sm.jpg' },
    { name: 'Lynda Stone', role: 'Designer', img: 'assets/images/team/team-8-sm.jpg' }
  ];

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
}
