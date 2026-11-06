import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface ServiceDetail {
  code: string;
  name: string;
  badge: string;
  summary: string;
  iconSvg: string;
  items: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="relative py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            Comprehensive Capabilities
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Professional Services
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            End-to-end financial visibility, regulatory assurance, costing intelligence, and strategic advisory under one unified roof.
          </p>

          <!-- Interactive Filter Tabs -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button (click)="activeTab.set('all')" 
                    [class.bg-slate-900]="activeTab() === 'all'"
                    [class.text-white]="activeTab() === 'all'"
                    [class.bg-white]="activeTab() !== 'all'"
                    [class.text-slate-700]="activeTab() !== 'all'"
                    class="px-4 py-2 rounded-xl text-xs font-bold shadow-sm border border-slate-200 transition-all cursor-pointer">
              All 6 Disciplines
            </button>
            <button *ngFor="let s of services"
                    (click)="activeTab.set(s.code)"
                    [class.bg-red-600]="activeTab() === s.code"
                    [class.text-white]="activeTab() === s.code"
                    [class.bg-white]="activeTab() !== s.code"
                    [class.text-slate-700]="activeTab() !== s.code"
                    class="px-4 py-2 rounded-xl text-xs font-bold shadow-sm border border-slate-200 transition-all cursor-pointer">
              {{ s.code }} — {{ s.name }}
            </button>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of filteredServices()" 
               class="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            
            <!-- Floating Accent Badge -->
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs font-black px-3 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100">
                {{ service.code }}
              </span>
              <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                {{ service.badge }}
              </span>
            </div>

            <!-- Service Title & Summary -->
            <div class="mb-6">
              <h3 class="text-xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {{ service.name }}
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {{ service.summary }}
              </p>

              <!-- Detailed Bullet Checklist -->
              <div class="space-y-2.5 pt-4 border-t border-slate-100">
                <div *ngFor="let item of service.items" class="flex items-start gap-2.5 text-xs text-slate-700">
                  <div class="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="font-medium">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom Action Button -->
            <div class="pt-6 border-t border-slate-100 mt-6">
              <button (click)="enquireService(service.name)" 
                      class="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 group-hover:bg-red-600 group-hover:text-white border border-slate-200 group-hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <span>Book {{ service.name }}</span>
                <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  private modalService = inject(ModalService);
  activeTab = signal<string>('all');

  readonly services: ServiceDetail[] = [
    {
      code: '01',
      name: 'Corporate Finance',
      badge: 'Planning & Decisions',
      summary: 'Empower management with forward-looking capital allocation, liquidity control, and financial projections.',
      iconSvg: '',
      items: [
        'Financial Planning',
        'Budgeting & Forecasting',
        'Cash Flow Management',
        'Working Capital Management',
        'Financial Analysis',
        'Business Projections',
        'Management Reporting',
        'Financial Decision Support'
      ]
    },
    {
      code: '02',
      name: 'Costing & Profitability',
      badge: 'Margins & Control',
      summary: 'Accurately uncover product unit costs, overhead leakages, and margin drivers to maximize enterprise profitability.',
      iconSvg: '',
      items: [
        'Cost Sheet Preparation',
        'Product & Service Costing',
        'Cost Centre Analysis',
        'Cost Allocation',
        'Overhead Analysis',
        'Cost Control',
        'Variance Analysis',
        'Cost & Profitability Analysis',
        'Pricing & Margin Analysis'
      ]
    },
    {
      code: '03',
      name: 'Accounting & Financial Reporting',
      badge: 'MIS & Bookkeeping',
      summary: 'Rock-solid accounting operations and real-time management information systems (MIS) for business clarity.',
      iconSvg: '',
      items: [
        'Bookkeeping',
        'Tally Accounting',
        'Accounts Payable & Receivable',
        'Bank Reconciliation',
        'Ledger Management',
        'Financial Statements',
        'MIS Reporting',
        'Accounting Process Support'
      ]
    },
    {
      code: '04',
      name: 'Taxation',
      badge: 'Direct & Indirect Tax',
      summary: 'Timely, compliant, and optimized handling of GST, Income Tax filings, TDS reconciliation, and tax notice assistance.',
      iconSvg: '',
      items: [
        'GST Registration',
        'GST Return Filing',
        'GST Amendment',
        'GST Notice Support',
        'Income Tax Returns',
        'Tax Computation',
        'TDS/TCS',
        'Tax Compliance Support'
      ]
    },
    {
      code: '05',
      name: 'Corporate & Business Compliance',
      badge: 'ROC & Statutory',
      summary: 'Full statutory governance protecting your company from legal penalties, regulatory delays, and compliance friction.',
      iconSvg: '',
      items: [
        'ROC/MCA Compliance',
        'Company/LLP Support',
        'Business Registration',
        'Udyam Registration',
        'IEC Registration',
        'ESI/PF Support',
        'Statutory Compliance Assistance'
      ]
    },
    {
      code: '06',
      name: 'Business Advisory',
      badge: 'Strategy & Growth',
      summary: 'Hands-on advisory that translates financial figures into actionable strategies for sustainable business expansion.',
      iconSvg: '',
      items: [
        'Business Planning',
        'Financial Decision Support',
        'Cost Optimisation',
        'Business Performance Analysis',
        'Cash Flow Planning',
        'Growth Planning',
        'Financial Risk Identification',
        'Management Support'
      ]
    }
  ];

  filteredServices(): ServiceDetail[] {
    const tab = this.activeTab();
    if (tab === 'all') {
      return this.services;
    }
    return this.services.filter(s => s.code === tab);
  }

  enquireService(serviceName: string): void {
    this.modalService.openConsultation(serviceName);
  }
}
