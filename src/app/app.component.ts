import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showFooter = true;
  showBackToTop = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('?')[0];

        // Hide footer on specific routes
        const hiddenRoutes = ['/error', '/home-one', '/home-three', '/coming-soon'];
        this.showFooter = !hiddenRoutes.includes(path);

        // Scroll to top (after DOM render)
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 100);
      }
    });
  }

  // Show/hide "Back to Top" button on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 200;
  }

  // Back to Top button action
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
