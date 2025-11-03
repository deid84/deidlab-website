import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { PricingTableComponent } from './components/pages/pricing-table/pricing-table.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceThreeComponent } from './components/pages/service-three/service-three.component';
import { ServiceFourComponent } from './components/pages/service-four/service-four.component';
import { PortfolioTwoColumnComponent } from './components/pages/portfolio-two-column/portfolio-two-column.component';
import { PortfolioThreeColumnComponent } from './components/pages/portfolio-three-column/portfolio-three-column.component';
import { PortfolioFourColumnComponent } from './components/pages/portfolio-four-column/portfolio-four-column.component';
import { PortfolioDetailComponent } from './components/pages/portfolio-detail/portfolio-detail.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeOneComponent},
  {path: 'home-two', component: HomeTwoComponent},
  {path: 'home-three', component: HomeThreeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-team', component: OurTeamComponent},
  {path: 'team-details', component: TeamDetailsComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'pricing-table', component: PricingTableComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'service-two', component: ServiceTwoComponent},
  {path: 'service-three', component: ServiceThreeComponent},
  {path: 'service-four', component: ServiceFourComponent},
  {path: 'portfolio-two-column', component: PortfolioTwoColumnComponent},
  {path: 'portfolio-three-column', component: PortfolioThreeColumnComponent},
  {path: 'portfolio-four-column', component: PortfolioFourColumnComponent},
  {path: 'portfolio-detail', component: PortfolioDetailComponent},
  {path: 'blog-grid', component: BlogGridComponent},
  {path: 'blog-standard', component: BlogStandardComponent},
  {path: 'contact', component: ContactComponent},
  // Here add new pages component

  {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
