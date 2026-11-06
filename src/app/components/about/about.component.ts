import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative py-24 bg-slate-900 text-white overflow-hidden">
      <!-- Decorative Backdrop Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Founder Showcase Card with Gowtham's Portrait -->
          <div class="lg:col-span-5">
            <div class="relative">
              
              <!-- Background Ambient Glow -->
              <div class="absolute -inset-4 bg-gradient-to-r from-red-600/30 via-rose-600/20 to-slate-700/30 rounded-3xl blur-2xl opacity-75 animate-pulse-glow"></div>

              <!-- Main Floating Founder Frame -->
              <div class="relative bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-float-slow">
                
                <!-- Founder Photo Container -->
                <div class="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 shadow-2xl group mb-6">
                  <img src="/images/gowtham-founder.jpg" 
                       alt="Gowtham, Founder of GTC Solutions" 
                       class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  
                  <!-- Gradient Vignette -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  
                  <!-- Overlay Founder Tag -->
                  <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p class="text-xl font-extrabold text-white tracking-wide">Gowtham</p>
                      <p class="text-xs text-red-400 font-bold uppercase tracking-wider">Founder &amp; Strategic Advisor</p>
                    </div>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/20">
                      Est. 2024
                    </span>
                  </div>
                </div>

                <!-- Founder Quote Card -->
                <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-700/70 shadow-inner">
                  <div class="flex items-start gap-3">
                    <svg class="w-6 h-6 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p class="text-xs text-slate-300 italic leading-relaxed font-medium">
                      "Financial management is not only about maintaining records or completing compliance requirements. It is about understanding the numbers, identifying opportunities and risks, and using financial information to make better business decisions."
                    </p>
                  </div>
                </div>

                <!-- Fast Facts Floating Pill -->
                <div class="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700/60 font-semibold">
                  <span class="flex items-center gap-1.5 text-white">
                    <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    HQ: Coimbatore, TN
                  </span>
                  <span class="text-emerald-400 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                    Pan-India Advisory
                  </span>
                </div>

              </div>

            </div>
          </div>

          <!-- Right Column: Narrative, Vision & Mission -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 text-red-400 text-xs font-bold uppercase tracking-wider mb-5 border border-red-800/60">
              About GTC Solutions
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              A Structured, Business-Focused Approach to <br class="hidden sm:inline" />
              <span class="text-red-500">Financial Management.</span>
            </h2>

            <div class="space-y-4 text-slate-300 text-base leading-relaxed mb-8 font-medium">
              <p>
                <strong class="text-white font-bold">GTC Solutions</strong> supports businesses across India with integrated financial, taxation, accounting, costing, and compliance solutions.
              </p>
              <p>
                Established in 2024 by <strong class="text-white font-bold">Gowtham</strong>, GTC Solutions was built with a clear objective — to bring a structured and business-focused approach to financial management.
              </p>
              <p>
                We work with businesses to strengthen financial visibility, manage financial requirements, improve compliance, understand costs and profitability, and support better decision-making.
              </p>
              <p class="text-slate-400 text-sm">
                Our services combine Corporate Finance, Costing &amp; Profitability, Accounting, Taxation, Compliance, and Business Advisory, allowing businesses to access multiple financial capabilities through one professional partner.
              </p>
            </div>

            <!-- Vision & Mission Floating Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              
              <!-- Vision Card -->
              <div class="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-red-500/50 shadow-lg hover:shadow-2xl floating-card-lift transition-all duration-300 group">
                <div class="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Our Vision</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  To become a trusted Corporate Finance &amp; Business Advisory partner for businesses across India.
                </p>
              </div>

              <!-- Mission Card -->
              <div class="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-red-500/50 shadow-lg hover:shadow-2xl floating-card-lift transition-all duration-300 group">
                <div class="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Our Mission</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  To deliver practical, reliable, and business-focused financial solutions that help organisations manage their finances effectively and make informed decisions.
                </p>
              </div>

            </div>

            <!-- Bottom Action Row -->
            <div class="flex flex-wrap items-center gap-4">
              <button (click)="openBooking()" 
                      class="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:scale-102 transition-all cursor-pointer">
                Schedule a Discussion with Gowtham
              </button>
              <button (click)="smoothScrollTo('services')" 
                      class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors cursor-pointer">
                Explore Full Service Spectrum
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  private modalService = inject(ModalService);

  openBooking(): void {
    this.modalService.openConsultation('Leadership Advisory Discussion');
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
