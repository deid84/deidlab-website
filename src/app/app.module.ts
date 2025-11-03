import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { OurTeamComponent } from './components/pages/our-team/our-team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { PricingTableComponent } from './components/pages/pricing-table/pricing-table.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    ErrorComponent,
    AboutUsComponent,
    OurTeamComponent,
    TeamDetailsComponent,
    TestimonialsComponent,
    PricingTableComponent,
    ComingSoonComponent,
    ServicesComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    PortfolioTwoColumnComponent,
    PortfolioThreeColumnComponent,
    PortfolioFourColumnComponent,
    PortfolioDetailComponent,
    BlogGridComponent,
    BlogStandardComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxParallaxModule,
    BrowserAnimationsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
