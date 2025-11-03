import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.css'
})
export class PricingTableComponent {
  // Pricing Plans
  pricingPlans = [
    {
      name: 'Starter',
      price: '$19.99',
      duration: 'monthly',
      features: ['Unlimited User', 'Unlimited Storage', '24/7 Support', 'Future Updates'],
      link: '/contact'
    },
    {
      name: 'Premium',
      price: '$29.99',
      duration: 'monthly',
      features: ['Unlimited User', 'Unlimited Storage', '24/7 Support', 'Future Updates'],
      link: '/contact'
    },
    {
      name: 'Pro',
      price: '$39.99',
      duration: 'monthly',
      features: ['Unlimited User', 'Unlimited Storage', '24/7 Support', 'Future Updates'],
      link: '/contact'
    }
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
