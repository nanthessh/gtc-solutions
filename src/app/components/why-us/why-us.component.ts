import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface Pillar {
  number: string;
  title: string;
  description: string;
  iconSvg: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-us" class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/90 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-800/80">
            Why GTC Solutions
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            More Than Compliance. <br class="hidden sm:inline" />
            <span class="text-red-500">A Financial Perspective.</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300">
            We bridge the gap between routine compliance paperwork and high-impact strategic business leadership.
          </p>
        </div>

        <!-- 6 Pillars Floating Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let pillar of pillars" 
               class="group relative bg-slate-800/70 hover:bg-slate-800 rounded-3xl p-8 border border-slate-700/80 hover:border-red-500/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            
            <div>
              <!-- Top Row: Icon & Number -->
              <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="pillar.iconSvg"></svg>
                </div>
                <span class="text-xl font-black text-slate-600 group-hover:text-red-400 transition-colors">
                  {{ pillar.number }}
                </span>
              </div>

              <!-- Title & Description -->
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {{ pillar.title }}
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed">
                {{ pillar.description }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-slate-700/60 flex items-center text-xs text-slate-400">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>
              Core GTC Operating Principle
            </div>

          </div>
        </div>

        <!-- Bottom Banner Box -->
        <div class="mt-16 bg-gradient-to-r from-red-950/60 via-slate-800/80 to-slate-900/90 rounded-3xl p-8 border border-red-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 class="text-lg font-bold text-white">Experience the GTC Difference</h4>
            <p class="text-sm text-slate-300 mt-1">
              Elevate your financial management from routine records to proactive business insights.
            </p>
          </div>
          <button (click)="openBooking()" 
                  class="shrink-0 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer">
            Book a Strategic Consultation
          </button>
        </div>

      </div>
    </section>
  `
})
export class WhyUsComponent {
  private modalService = inject(ModalService);

  readonly pillars: Pillar[] = [
    {
      number: '01',
      title: 'Business-Focused',
      description: 'We look beyond individual financial tasks and consider their overall impact on the business.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
    },
    {
      number: '02',
      title: 'Practical Solutions',
      description: 'Our focus is on practical solutions that can be implemented in real business situations.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />'
    },
    {
      number: '03',
      title: 'Integrated Capabilities',
      description: 'Corporate Finance, Costing, Accounting, Taxation, Compliance, and Business Advisory.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />'
    },
    {
      number: '04',
      title: 'Clear Communication',
      description: 'We make financial and compliance matters easier to understand and act upon.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />'
    },
    {
      number: '05',
      title: 'Decision-Oriented',
      description: 'We help businesses use financial information and insights to make better decisions.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />'
    },
    {
      number: '06',
      title: 'Growth-Focused',
      description: 'We support immediate financial requirements while keeping long-term business objectives in focus.',
      iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />'
    }
  ];

  openBooking(): void {
    this.modalService.openConsultation('Why GTC Solutions - Strategic Assessment');
  }
}
