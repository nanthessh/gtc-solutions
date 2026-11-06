import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="py-24 bg-slate-50 relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            Answers & Clarity
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about partnering with GTC Solutions for your financial management.
          </p>

          <!-- Search Box -->
          <div class="mt-8 max-w-md mx-auto relative">
            <input type="text" 
                   [value]="searchQuery()"
                   (input)="onSearchInput($event)"
                   placeholder="Search questions (e.g. GST, costing, Coimbatore)..."
                   class="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-sm" />
            <svg class="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- FAQ Accordion List -->
        <div class="space-y-4">
          <div *ngFor="let item of filteredFaqs(); let i = index" 
               class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-300">
            
            <button (click)="toggleFaq(item)" 
                    class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none">
              <span class="text-base sm:text-lg font-bold text-slate-900 hover:text-red-600 transition-colors">
                {{ item.question }}
              </span>
              <span class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300"
                    [class.rotate-180]="item.isOpen"
                    [class.bg-red-50]="item.isOpen"
                    [class.text-red-600]="item.isOpen">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <!-- Answer Content -->
            <div *ngIf="item.isOpen" 
                 class="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
              {{ item.answer }}
            </div>

          </div>

          <!-- Empty state when search matches nothing -->
          <div *ngIf="filteredFaqs().length === 0" class="text-center py-10 bg-white rounded-2xl border border-slate-200">
            <p class="text-slate-500 text-sm">No questions match your search.</p>
            <button (click)="searchQuery.set('')" class="mt-2 text-xs font-bold text-red-600 hover:underline">
              Clear search filter
            </button>
          </div>
        </div>

        <!-- Still have questions card -->
        <div class="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-900">Have a specific question not listed here?</h4>
              <p class="text-xs sm:text-sm text-slate-500">Contact Gowtham directly or send an instant WhatsApp query.</p>
            </div>
          </div>
          <div class="flex items-center gap-3 w-full sm:w-auto">
            <a href="https://wa.me/918438898767?text=Hi%20GTC%20Solutions,%20I%20have%20a%20specific%20question%20regarding%20financial%20services" 
               target="_blank" 
               class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors text-center">
              Ask on WhatsApp
            </a>
            <a href="#contact" 
               class="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors text-center">
              Contact Form
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class FaqComponent {
  searchQuery = signal<string>('');

  readonly faqs: FaqItem[] = [
    {
      question: 'What does GTC Solutions do?',
      answer: 'GTC Solutions provides Corporate Finance, Costing, Accounting, Taxation, Compliance, and Business Advisory services. We help businesses understand their numbers, ensure statutory compliance, and make better financial decisions.',
      isOpen: true
    },
    {
      question: 'What is Corporate Finance?',
      answer: 'Corporate Finance includes financial planning, budgeting, forecasting, cash flow management, working capital management, financial analysis, and financial decision support to keep your business financially resilient and primed for growth.',
      isOpen: false
    },
    {
      question: 'Do you provide costing services?',
      answer: 'Yes. Costing services include cost sheet preparation, product and service costing, cost centre analysis, overhead analysis, cost control, variance analysis, profitability analysis, and pricing support.',
      isOpen: false
    },
    {
      question: 'Do you provide GST services?',
      answer: 'Yes. GST services include registration, return filing, amendments, compliance support, and GST notice support with structured resolution.',
      isOpen: false
    },
    {
      question: 'Do you provide accounting services?',
      answer: 'Yes. Services include bookkeeping, Tally accounting, ledger management, bank reconciliation, accounts payable and receivable support, financial statements, and MIS reporting.',
      isOpen: false
    },
    {
      question: 'Can you help with financial projections?',
      answer: 'Yes. We support businesses with business projections, revenue planning, expense analysis, cash flow projections, and financial estimates tailored for management reviews or banking requirements.',
      isOpen: false
    },
    {
      question: 'Do you support businesses outside Coimbatore?',
      answer: 'Yes. While based in Coimbatore, Tamil Nadu, GTC Solutions supports businesses across India through modern digital infrastructure and remote advisory consultations.',
      isOpen: false
    },
    {
      question: 'How can I contact GTC Solutions?',
      answer: 'You can contact GTC Solutions by phone (+91 84388 98767), WhatsApp (+91 84388 98767), email (gtcsolutions28@gmail.com), or through the enquiry form on this website.',
      isOpen: false
    }
  ];

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  toggleFaq(item: FaqItem): void {
    item.isOpen = !item.isOpen;
  }

  filteredFaqs(): FaqItem[] {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.faqs;
    return this.faqs.filter(f => 
      f.question.toLowerCase().includes(q) || 
      f.answer.toLowerCase().includes(q)
    );
  }
}
