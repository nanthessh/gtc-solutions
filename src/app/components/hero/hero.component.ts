import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <!-- Ambient Glow & Floating Decorative Blobs -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-100/60 via-slate-100 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div class="absolute -top-10 right-10 w-72 h-72 bg-red-200/30 rounded-full blur-2xl -z-10 pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <!-- Background Subtle Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: High-Impact Typography & Narrative -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            <!-- Floating Service Pill -->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm backdrop-blur-md mb-6 hover:border-red-200 transition-all">
              <span class="flex h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse"></span>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-800">
                Corporate Finance &bull; Costing &bull; Taxation &bull; Compliance &bull; Advisory
              </span>
            </div>

            <!-- Main Heading with Brand Focus -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
              Helping Businesses Make <br class="hidden sm:inline" />
              <span class="bg-gradient-to-r from-red-600 via-red-700 to-slate-900 bg-clip-text text-transparent">
                Better Financial Decisions.
              </span>
            </h1>

            <!-- Descriptive Body Copy -->
            <p class="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
              <strong class="text-slate-900 font-semibold">GTC Solutions</strong> supports businesses across India with Corporate Finance, Accounting, Costing, Taxation, Compliance, and Business Advisory services.
            </p>

            <!-- Dual CTA Action Group with Floating Effects -->
            <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button (click)="openBooking()" 
                      class="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 shadow-xl shadow-red-600/30 hover:shadow-red-600/45 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer">
                <span>Book a Consultation</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>

              <a href="#services" 
                 class="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold text-slate-700 bg-white border border-slate-200/90 shadow-sm hover:bg-slate-50 hover:text-red-600 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Explore Our Services</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <!-- Location & Credential Bar -->
            <div class="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-slate-200/80 w-full text-xs text-slate-500 font-medium">
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

          <!-- Right Column: Floating Interactive Visual Board -->
          <div class="lg:col-span-5 relative">
            
            <!-- Central Visual Glass Card -->
            <div class="relative bg-white/90 backdrop-blur-2xl rounded-3xl p-7 border border-slate-200/90 shadow-2xl floating-shadow">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-5 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-slate-100 shadow-sm flex items-center justify-center">
                    <img src="/images/gtc-logo.jpg" alt="GTC" class="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">GTC Financial Suite</h3>
                    <p class="text-[11px] text-slate-500">Integrated Decision Framework</p>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Live Pan-India
                </span>
              </div>

              <!-- Metrics Showcase -->
              <div class="grid grid-cols-2 gap-3.5 my-6">
                <div class="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 hover:border-red-200 transition-colors">
                  <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Financial Visibility</span>
                  <p class="text-xl font-extrabold text-slate-900 mt-1">100% Clean</p>
                  <p class="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    MIS & Decision Ready
                  </p>
                </div>
                <div class="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 hover:border-red-200 transition-colors">
                  <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Statutory Guard</span>
                  <p class="text-xl font-extrabold text-slate-900 mt-1">Zero Penalty</p>
                  <p class="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    ROC & GST Compliant
                  </p>
                </div>
              </div>

              <!-- Service List Snapshot with Icons -->
              <div class="space-y-2.5">
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50/50 transition-colors border border-slate-100">
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">01</span>
                    <span class="text-xs font-semibold text-slate-800">Corporate Finance & Forecasting</span>
                  </div>
                  <span class="text-[11px] font-medium text-slate-500">Cash Flow & Capital</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50/50 transition-colors border border-slate-100">
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">02</span>
                    <span class="text-xs font-semibold text-slate-800">Costing & Profitability</span>
                  </div>
                  <span class="text-[11px] font-medium text-slate-500">Margins & Variance</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-red-50/50 transition-colors border border-slate-100">
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">03</span>
                    <span class="text-xs font-semibold text-slate-800">Taxation & Compliance</span>
                  </div>
                  <span class="text-[11px] font-medium text-slate-500">GST, MCA & Returns</span>
                </div>
              </div>

              <!-- Fast Action Trigger -->
              <div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div class="flex items-center -space-x-2">
                  <div class="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">CK</div>
                  <div class="w-7 h-7 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">CS</div>
                  <div class="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">AS</div>
                  <div class="w-7 h-7 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">UT</div>
                </div>
                <span class="text-xs font-semibold text-slate-600">Multi-Industry Portfolio</span>
              </div>
            </div>

            <!-- Floating Satellite Badge 1 (Top Right) -->
            <div class="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-slate-100 animate-float-slow">
              <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-900">Profitability Focus</p>
                <p class="text-[11px] text-slate-500">Cost Sheet & Pricing</p>
              </div>
            </div>

            <!-- Floating Satellite Badge 2 (Bottom Left) -->
            <div class="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-slate-100 animate-float-slow" style="animation-delay: -3s;">
              <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-900">Statutory Shield</p>
                <p class="text-[11px] text-slate-500">ROC, GST, ESI, PF</p>
              </div>
            </div>

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
}
