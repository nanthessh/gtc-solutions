import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-brand-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Floating Backdrop -->
    <div *ngIf="modalService.isBrandModalOpen()" 
         (click)="onBackdropClick($event)"
         class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md transition-all animate-fadeIn">
      
      <!-- Modal Container -->
      <div class="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden my-8 animate-float-gentle">
        
        <!-- Gradient Top Bar -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-slate-900"></div>

        <!-- Close Button -->
        <button (click)="close()" 
                class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Brand Showcase Content -->
        <div class="text-center pt-2 pb-4">
          
          <!-- High-Res Logo in Glowing Floating Pill -->
          <div class="relative inline-block mb-4">
            <div class="absolute -inset-3 bg-red-600/20 rounded-3xl blur-xl animate-pulse-glow"></div>
            <div class="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl bg-white p-3 shadow-2xl border border-slate-200 flex items-center justify-center group">
              <img src="/images/gtc-logo.jpg" alt="GTC Solutions Official Brand Logo" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span class="absolute -bottom-2 right-1/2 translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white shadow-md border border-slate-700">
              Est. 2024
            </span>
          </div>

          <!-- Titles -->
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
            GTC <span class="text-red-600">SOLUTIONS</span>
          </h3>
          <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
            Corporate Finance &bull; Costing &bull; Taxation &bull; Compliance &bull; Advisory
          </p>
          <p class="text-sm font-semibold text-slate-700 italic mt-2 max-w-md mx-auto">
            "Helping Businesses Make Better Financial Decisions."
          </p>
        </div>

        <!-- Brand Overview Box -->
        <div class="space-y-3.5 my-5">
          
          <!-- Location & Coverage Card -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-slate-900">Headquarters</p>
                <p class="text-slate-500">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              Pan-India Reach
            </span>
          </div>

          <!-- Founder Info Snippet -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-300">
              <img src="/images/gowtham-founder.jpg" alt="Gowtham" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <p class="text-xs font-bold text-slate-900">Gowtham</p>
                <span class="text-[10px] font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">Founder &amp; Strategic Advisor</span>
              </div>
              <p class="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Bringing structured, business-focused financial leadership, costing intelligence, and statutory safety to growing Indian enterprises.
              </p>
            </div>
          </div>

          <!-- 6 Pillars Quick Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">Corporate Finance</span>
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">Costing &amp; Profitability</span>
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">Accounting &amp; MIS</span>
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">Taxation &amp; GST</span>
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">ROC / MCA Compliance</span>
            <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700">Business Advisory</span>
          </div>

        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
          <button (click)="openBookingFromBrand()" 
                  class="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span>Book a Consultation</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          <a href="https://wa.me/918438898767?text=Hello%20GTC%20Solutions,%20I%20am%20inquiring%20about%20your%20services" 
             target="_blank" 
             class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.606-5.768-5.706zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.072-2.275-.583-1.884-.785-3.08-2.709-3.174-2.834-.094-.125-.769-1.023-.769-1.95 0-.928.487-1.385.66-1.574.174-.189.38-.236.507-.236.126 0 .252.002.361.008.115.006.27-.044.422.321.157.378.536 1.309.584 1.405.047.095.079.206.016.332-.063.126-.094.205-.189.315-.095.11-.2.247-.285.332-.095.095-.195.198-.084.388.11.19.49 1.133 1.325 1.874.835.741 1.54.972 1.761 1.082.221.11.352.095.483-.055.131-.15.563-.654.714-.88.15-.226.302-.19.507-.113.205.077 1.303.614 1.528.726.225.112.375.168.43.264.056.095.056.552-.088.957z"/></svg>
            <span>WhatsApp Us (+91 84388 98767)</span>
          </a>
        </div>

      </div>
    </div>
  `
})
export class BrandModalComponent {
  modalService = inject(ModalService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalService.isBrandModalOpen()) {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('fixed')) {
      this.close();
    }
  }

  close(): void {
    this.modalService.closeBrandModal();
  }

  openBookingFromBrand(): void {
    this.close();
    this.modalService.openConsultation('General Advisory & Consultation');
  }
}
