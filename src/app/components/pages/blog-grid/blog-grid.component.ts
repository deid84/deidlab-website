import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.css'
})
export class BlogGridComponent {
  blogPosts = [
    {
      img: 'assets/images/blogs/blog-1.jpg',
      date: 'April 19',
      title: 'Improving daily life with an AI meal plan',
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    },
    {
      img: 'assets/images/blogs/blog-2.jpg',
      date: 'April 19',
      title: "The worst advice we've ever heard about web design",
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    },
    {
      img: 'assets/images/blogs/blog-3.jpg',
      date: 'April 19',
      title: '10 things nobody told you about being a web designer',
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    },
    {
      img: 'assets/images/blogs/blog-4.jpg',
      date: 'April 19',
      title: 'Improving daily life with an AI meal plan',
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    },
    {
      img: 'assets/images/blogs/blog-5.jpg',
      date: 'April 19',
      title: '10 things nobody told you about being a web designer',
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    },
    {
      img: 'assets/images/blogs/blog-6.jpg',
      date: 'April 19',
      title: "The worst advice we've ever heard about web design",
      link: '/blog-standard',
      excerpt: 'Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...'
    }
  ];
}
