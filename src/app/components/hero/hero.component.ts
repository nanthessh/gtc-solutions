import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      <!-- Ambient Glow Blobs (Desktop only to guarantee 60fps on mobile GPUs) -->
      <div class="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-red-100/40 to-transparent rounded-full blur-2xl -z-10 pointer-events-none"></div>
      <div class="hidden md:block absolute -top-12 right-12 w-64 h-64 bg-red-100/30 rounded-full blur-2xl -z-10 pointer-events-none"></div>

      <!-- Subtle Dot Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          <!-- Left Column: Typography & Floating Value Propositions -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            <!-- Floating Service Pill -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-4 sm:mb-6">
              <span class="flex h-2 w-2 rounded-full bg-red-600"></span>
              <span class="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-800">
                Corporate Finance &bull; Costing &bull; Taxation &bull; Compliance &bull; Advisory
              </span>
            </div>

            <!-- Main Heading with high-contrast gradient -->
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4 sm:mb-6">
              Helping Businesses Make <br class="hidden sm:inline" />
              <span class="shimmer-text">
                Better Financial Decisions.
              </span>
            </h1>

            <!-- Descriptive Subhead -->
            <p class="text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-medium">
              <strong class="text-slate-900 font-bold">GTC Solutions</strong> supports businesses across India with Corporate Finance, Accounting, Costing, Taxation, Compliance, and Business Advisory services.
            </p>

            <!-- Dual Action Button Group -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10">
              <button (click)="openBooking()" 
                      class="px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/30 hover:shadow-red-600/40 active:scale-98 transition-all flex items-center justify-center gap-2.5 cursor-pointer min-h-[48px]">
                <span>Book a Consultation</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>

              <button (click)="smoothScrollTo('services')" 
                      class="px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-slate-700 bg-white border border-slate-200 shadow-xs hover:bg-slate-50 hover:text-red-600 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]">
                <span>Explore Our Services</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Credential Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-5 pt-4 sm:pt-6 border-t border-slate-200/80 w-full text-xs text-slate-600 font-semibold">
              <div class="flex items-center gap-2">
                <span class="p-1 rounded-md bg-red-50 text-red-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Based in Coimbatore, Tamil Nadu</span>
              </div>
              <div class="hidden sm:block text-slate-300">&bull;</div>
              <div class="flex items-center gap-2">
                <span class="p-1 rounded-md bg-emerald-50 text-emerald-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Supporting Businesses Across India</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Dashboard Board -->
          <div class="lg:col-span-5 relative mt-4 lg:mt-0">
            
            <!-- Central Card -->
            <div class="relative bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-xl floating-shadow">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-4 border-b border-slate-100">
                <button (click)="openLogoModal()" 
                        type="button"
                        class="flex items-center gap-3 text-left group/logo cursor-pointer focus:outline-none" 
                        title="Click to view GTC Solutions Brand Profile & Logo Showcase">
                  <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-white p-1 border border-slate-200 shadow-xs flex items-center justify-center transition-transform group-hover/logo:scale-105">
                    <img src="/images/gtc-logo.jpg" alt="GTC Logo" class="w-full h-full object-contain" width="44" height="44" />
                  </div>
                  <div>
                    <h3 class="text-sm font-extrabold text-slate-900 group-hover/logo:text-red-600 transition-colors flex items-center gap-1">
                      <span>GTC Financial Suite</span>
                      <svg class="w-3 h-3 text-slate-400 group-hover/logo:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </h3>
                    <p class="text-[10px] sm:text-[11px] text-slate-500 font-medium">Click to view Brand Profile</p>
                  </div>
                </button>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs flex items-center gap-1.5 shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Active Pan-India
                </span>
              </div>

              <!-- Metrics Showcase -->
              <div class="grid grid-cols-2 gap-3 my-4 sm:my-5">
                <div class="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Financial Visibility</span>
                  <p class="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">100% Clean</p>
                  <p class="text-[10px] sm:text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    Decision Ready
                  </p>
                </div>
                <div class="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Statutory Guard</span>
                  <p class="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">Zero Penalty</p>
                  <p class="text-[10px] sm:text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    ROC &amp; GST Compliant
                  </p>
                </div>
              </div>

              <!-- Capability Snapshot -->
              <div class="space-y-2">
                <div class="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100/90 text-xs">
                  <div class="flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-black text-[11px]">01</span>
                    <span class="font-bold text-slate-800">Corporate Finance &amp; Forecasting</span>
                  </div>
                  <span class="text-[10px] sm:text-[11px] font-semibold text-slate-500">Cash Flow</span>
                </div>
                <div class="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100/90 text-xs">
                  <div class="flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-black text-[11px]">02</span>
                    <span class="font-bold text-slate-800">Costing &amp; Profitability</span>
                  </div>
                  <span class="text-[10px] sm:text-[11px] font-semibold text-slate-500">Margins</span>
                </div>
                <div class="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100/90 text-xs">
                  <div class="flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-black text-[11px]">03</span>
                    <span class="font-bold text-slate-800">Taxation &amp; Compliance</span>
                  </div>
                  <span class="text-[10px] sm:text-[11px] font-semibold text-slate-500">GST &amp; MCA</span>
                </div>
              </div>

              <!-- Client Avatars -->
              <div class="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <div class="flex items-center -space-x-1.5">
                  <div class="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white shadow-xs">CK</div>
                  <div class="w-7 h-7 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white shadow-xs">CS</div>
                  <div class="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white shadow-xs">AS</div>
                  <div class="w-7 h-7 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white shadow-xs">UT</div>
                </div>
                <span class="text-xs font-bold text-slate-700">Multi-Industry Portfolio</span>
              </div>
            </div>

            <!-- Floating Badges (Desktop only) -->
            <div class="hidden md:flex absolute -top-4 -right-4 items-center gap-2.5 bg-white px-3.5 py-2.5 rounded-2xl shadow-lg border border-slate-100 animate-float-slow z-20">
              <div class="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-900">Profitability Focus</p>
                <p class="text-[10px] font-semibold text-slate-500">Cost Sheet &amp; Pricing</p>
              </div>
            </div>

          </div>

        </div>

        <!-- Service Ticker Strip -->
        <div class="mt-10 sm:mt-14 overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs py-3 contain-paint">
          <div class="animate-ticker text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center space-x-6 sm:space-x-8">
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> Corporate Finance</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> Costing &amp; Profitability</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> Accounting &amp; MIS</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> GST &amp; Income Tax</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> ROC &amp; MCA Statutory</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> Business Advisory</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> Corporate Finance</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> Costing &amp; Profitability</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> Accounting &amp; MIS</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> GST &amp; Income Tax</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-red-600"></span> ROC &amp; MCA Statutory</span>
            <span class="flex items-center gap-2.5"><span class="w-2 h-2 rounded-full bg-slate-400"></span> Business Advisory</span>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  private modalService = inject(ModalService);

  openBooking(): void {
    this.modalService.openConsultation('General Advisory & Consultation');
  }

  openLogoModal(): void {
    this.modalService.openBrandModal();
  }

  smoothScrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
