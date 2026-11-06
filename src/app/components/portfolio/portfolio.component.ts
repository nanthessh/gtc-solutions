import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  name: string;
  industry: string;
  note?: string;
  categories: string[];
  initials: string;
  colorClass: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Proven Track Record
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Portfolio
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            Trusted by dynamic enterprises across varied industries for robust financial execution and strategic advisory.
          </p>

          <!-- Portfolio Filter Buttons -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button *ngFor="let filter of filters" 
                    (click)="selectedFilter.set(filter)"
                    [class.bg-red-600]="selectedFilter() === filter"
                    [class.text-white]="selectedFilter() === filter"
                    [class.shadow-md]="selectedFilter() === filter"
                    [class.bg-slate-100]="selectedFilter() !== filter"
                    [class.text-slate-700]="selectedFilter() !== filter"
                    class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer hover:bg-red-50 hover:text-red-600">
              {{ filter }}
            </button>
          </div>
        </div>

        <!-- Portfolio Cards Grid (Clean and Simple: Client Name & Industry) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div *ngFor="let item of filteredItems()" 
               class="group relative bg-slate-50/80 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-red-300 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
            
            <!-- Top Row: Avatar & Status -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm tracking-wide shadow-sm"
                   [ngClass]="item.colorClass">
                {{ item.initials }}
              </div>
              <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Active Client
              </span>
            </div>

            <!-- Content: Client Name & Industry -->
            <div>
              <h3 class="text-xl font-black text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors">
                {{ item.name }}
              </h3>
              <p class="text-sm font-semibold text-slate-600">
                {{ item.industry }}
              </p>
              <p *ngIf="item.note" class="text-xs text-slate-400 mt-1">
                {{ item.note }}
              </p>
            </div>

            <!-- Bottom Category Pills -->
            <div class="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
              <span *ngFor="let cat of item.categories" class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white text-slate-600 border border-slate-200">
                {{ cat }}
              </span>
            </div>

          </div>
        </div>

        <!-- Clean Portfolio Note -->
        <div class="mt-12 text-center">
          <p class="text-xs text-slate-500">
            Plus numerous ongoing advisory mandates across diverse trading, manufacturing, and technology enterprises nationwide.
          </p>
        </div>

      </div>
    </section>
  `
})
export class PortfolioComponent {
  readonly filters: string[] = [
    'All',
    'Corporate Finance',
    'Costing',
    'Accounting',
    'Taxation',
    'Compliance',
    'Business Advisory'
  ];

  selectedFilter = signal<string>('All');

  readonly items: PortfolioItem[] = [
    {
      name: 'CK Foods',
      industry: 'Food Industry',
      initials: 'CK',
      colorClass: 'bg-amber-100 text-amber-800 border border-amber-200',
      categories: ['Costing', 'Corporate Finance', 'Taxation']
    },
    {
      name: 'Classic solutions',
      industry: 'Medical industry',
      initials: 'CS',
      colorClass: 'bg-blue-100 text-blue-800 border border-blue-200',
      categories: ['Accounting', 'Taxation', 'Compliance']
    },
    {
      name: 'AS Roadways',
      industry: 'Transport Agency',
      note: 'Multiple Industries',
      initials: 'AS',
      colorClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      categories: ['Corporate Finance', 'Costing', 'Taxation']
    },
    {
      name: 'Uno tech it solutions',
      industry: 'Software company',
      note: 'Multiple Industries',
      initials: 'UT',
      colorClass: 'bg-purple-100 text-purple-800 border border-purple-200',
      categories: ['Business Advisory', 'Accounting', 'Compliance']
    }
  ];

  filteredItems(): PortfolioItem[] {
    const f = this.selectedFilter();
    if (f === 'All') {
      return this.items;
    }
    return this.items.filter(item => 
      item.categories.includes(f) ||
      (f === 'Costing' && item.categories.includes('Costing')) ||
      (f === 'Compliance' && item.categories.includes('Compliance'))
    );
  }
}
