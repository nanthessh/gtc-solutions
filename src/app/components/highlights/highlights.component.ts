import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface HighlightItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  iconPath: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="highlights" class="relative py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-extrabold uppercase tracking-wider mb-4 border border-red-100 shadow-xs">
            Integrated Financial Capabilities
          </div>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Key Financial &amp; Advisory Highlights
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            A structured, business-focused approach combining records, compliance, costing, and strategic financial decision support.
          </p>
        </div>

        <!-- 6 Floating Cards Grid with 3D Hover Lift -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div *ngFor="let item of highlights" 
               class="group relative bg-slate-50/80 hover:bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-red-300 shadow-sm hover:shadow-2xl floating-card-lift flex flex-col justify-between">
            
            <!-- Hover Glow Gradient -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div>
              <!-- Header Row -->
              <div class="flex items-center justify-between mb-6">
                <div class="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="item.iconPath"></svg>
                </div>
                <span class="text-2xl font-black text-slate-300 group-hover:text-red-300 transition-colors">
                  {{ item.number }}
                </span>
              </div>

              <!-- Title & Description -->
              <span class="inline-block text-[11px] font-extrabold tracking-wider uppercase text-red-600 mb-2">
                {{ item.tag }}
              </span>
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {{ item.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed font-medium">
                {{ item.description }}
              </p>
            </div>

            <!-- Footer Action link -->
            <div class="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
              <button (click)="smoothScrollTo('services')" 
                      class="text-xs font-bold text-slate-700 group-hover:text-red-600 flex items-center gap-1.5 transition-colors cursor-pointer">
                <span>View Full Details</span>
                <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button (click)="openServiceConsultation(item.title)" 
                      class="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-xs transition-all cursor-pointer">
                Consult
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class HighlightsComponent {
  private modalService = inject(ModalService);

  readonly highlights: HighlightItem[] = [
    {
      id: 'corporate-finance',
      number: '01',
      title: 'Corporate Finance',
      tag: 'Strategic Capital',
      description: 'Financial planning, forecasting, cash flow and financial decision support.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
    },
    {
      id: 'costing-profitability',
      number: '02',
      title: 'Costing & Profitability',
      tag: 'Margins & Control',
      description: 'Cost analysis, profitability analysis, pricing and margin support.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />'
    },
    {
      id: 'accounting',
      number: '03',
      title: 'Accounting',
      tag: 'MIS & Financial Books',
      description: 'Accounting, bookkeeping, financial reporting and MIS support.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
    },
    {
      id: 'taxation',
      number: '04',
      title: 'Taxation',
      tag: 'Direct & Indirect Tax',
      description: 'GST, Income Tax, TDS/TCS and tax compliance support.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />'
    },
    {
      id: 'compliance',
      number: '05',
      title: 'Compliance',
      tag: 'Statutory Shield',
      description: 'ROC/MCA, registrations and statutory compliance assistance.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />'
    },
    {
      id: 'business-advisory',
      number: '06',
      title: 'Business Advisory',
      tag: 'Strategic Direction',
      description: 'Business planning, financial analysis and management support.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />'
    }
  ];

  openServiceConsultation(service: string): void {
    this.modalService.openConsultation(service);
  }

  smoothScrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
