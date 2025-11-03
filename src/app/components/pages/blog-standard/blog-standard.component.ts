import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrl: './blog-standard.component.css'
})
export class BlogStandardComponent {
  blogPosts = [
    {
      image: 'assets/images/blogs/blog-1-lg.jpg',
      category: 'Lifestyle',
      date: 'April 19, 2025',
      title: "The worst advice we've ever heard about web design",
      link: '/blog-grid',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...'
    },
    {
      image: 'assets/images/blogs/blog-2-lg.jpg',
      category: 'Knowledge',
      date: 'April 19, 2025',
      title: "The worst advice we've ever heard about web design",
      link: '/blog-grid',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...'
    },
    {
      image: 'assets/images/blogs/blog-3-lg.jpg',
      category: 'Health',
      date: 'April 19, 2025',
      title: "The worst advice we've ever heard about web design",
      link: '/blog-grid',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...'
    }
  ];

  categories = [
    { name: 'Art', count: 11 },
    { name: 'Fashion', count: 4 },
    { name: 'Lifestyle', count: 12 },
    { name: 'Nature', count: 8 },
    { name: 'Travel', count: 15 }
  ];

  popularPosts = [
    { image: 'assets/images/blogs/post-1.jpg', title: 'Nature', date: 'April 19, 2025' },
    { image: 'assets/images/blogs/post-2.jpg', title: 'Nature', date: 'April 19, 2025' },
    { image: 'assets/images/blogs/post-3.jpg', title: 'Nature', date: 'April 19, 2025' }
  ];

  tags = [
    'Branding', 'Design', 'Travel', 'Fashion', 'Food', 'Innovation', 'Movie',
    'Music', 'Nature', 'Office', 'Adventure', 'Photography', 'People', 'Work'
  ];
}
