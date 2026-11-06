import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingDockComponent } from './components/floating-dock/floating-dock.component';
import { ConsultationModalComponent } from './components/consultation-modal/consultation-modal.component';
import { PolicyModalsComponent } from './components/policy-modals/policy-modals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    AboutComponent,
    ServicesComponent,
    AdvisorComponent,
    PortfolioComponent,
    WhyUsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FloatingDockComponent,
    ConsultationModalComponent,
    PolicyModalsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
