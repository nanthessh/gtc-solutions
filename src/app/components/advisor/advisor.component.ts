import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Floating Interactive Container -->
        <div class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-700 overflow-hidden">
          
          <!-- Decorative Glow -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Info -->
            <div class="lg:col-span-5">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-800">
                Interactive Solution Matcher
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-4">
                Find the Right Financial Setup for Your Business
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-6">
                Tell us your sector and current financial challenge. We instantly map the precise advisory modules your company needs.
              </p>
              
              <div class="flex items-center gap-3 text-xs text-slate-400">
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  Custom Tailored
                </span>
                <span>&bull;</span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  No Obligation
                </span>
                <span>&bull;</span>
                <span class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  Pan-India Support
                </span>
              </div>
            </div>

            <!-- Right Interactive Tool -->
            <div class="lg:col-span-7 bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700/80 backdrop-blur-xl">
              
              <!-- Step 1: Industry Selection -->
              <div class="mb-5">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  1. Select Your Business Industry:
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button *ngFor="let ind of industries" 
                          (click)="selectedIndustry.set(ind)"
                          [class.bg-red-600]="selectedIndustry() === ind"
                          [class.text-white]="selectedIndustry() === ind"
                          [class.bg-slate-700]="selectedIndustry() !== ind"
                          [class.text-slate-300]="selectedIndustry() !== ind"
                          class="p-2.5 rounded-xl text-xs font-semibold text-center hover:bg-slate-600 transition-colors cursor-pointer border border-slate-600">
                    {{ ind }}
                  </button>
                </div>
              </div>

              <!-- Step 2: Key Challenge -->
              <div class="mb-6">
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  2. Immediate Priority:
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button *ngFor="let pri of priorities" 
                          (click)="selectedPriority.set(pri)"
                          [class.bg-red-600]="selectedPriority() === pri"
                          [class.text-white]="selectedPriority() === pri"
                          [class.bg-slate-700]="selectedPriority() !== pri"
                          [class.text-slate-300]="selectedPriority() !== pri"
                          class="p-2.5 rounded-xl text-xs font-semibold text-center hover:bg-slate-600 transition-colors cursor-pointer border border-slate-600">
                    {{ pri }}
                  </button>
                </div>
              </div>

              <!-- Recommendation Card Result -->
              <div class="p-4 rounded-xl bg-slate-900/90 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span class="text-[10px] font-bold text-red-400 uppercase tracking-widest">Recommended GTC Focus:</span>
                  <p class="text-sm font-extrabold text-white mt-0.5">
                    {{ getRecommendation() }}
                  </p>
                  <p class="text-[11px] text-slate-400">
                    Combining specialized domain metrics for {{ selectedIndustry() }}.
                  </p>
                </div>
                <button (click)="openConsultationWithMatch()" 
                        class="shrink-0 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer">
                  Discuss This Plan &rarr;
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class AdvisorComponent {
  private modalService = inject(ModalService);

  readonly industries = [
    'Food & Beverage',
    'Medical & Healthcare',
    'Transport & Logistics',
    'IT & Software',
    'Manufacturing',
    'Trading & Services'
  ];

  readonly priorities = [
    'Cost & Margins',
    'Cash Flow & Projections',
    'GST & Tax Notice',
    'ROC Compliance',
    'MIS & Bookkeeping',
    'Growth Advisory'
  ];

  selectedIndustry = signal<string>('Food & Beverage');
  selectedPriority = signal<string>('Cost & Margins');

  getRecommendation(): string {
    const ind = this.selectedIndustry();
    const pri = this.selectedPriority();

    if (pri.includes('Cost')) {
      return 'Costing & Profitability + Product Margins';
    } else if (pri.includes('Cash Flow') || pri.includes('Growth')) {
      return 'Corporate Finance & Business Advisory';
    } else if (pri.includes('GST')) {
      return 'Taxation & Statutory Filing Support';
    } else if (pri.includes('ROC')) {
      return 'Corporate & Business Compliance (MCA/ROC)';
    } else {
      return 'Accounting & Monthly MIS Financial Reporting';
    }
  }

  openConsultationWithMatch(): void {
    const rec = this.getRecommendation();
    this.modalService.openConsultation(`${rec} (${this.selectedIndustry()})`);
  }
}
