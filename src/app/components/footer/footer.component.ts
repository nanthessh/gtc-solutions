import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          <!-- Brand Identity -->
          <div class="lg:col-span-5 space-y-5">
            <button (click)="openLogoModal()" 
                    type="button"
                    class="flex items-center gap-3.5 text-left group cursor-pointer focus:outline-none"
                    title="Click to view GTC Solutions Brand Profile & Logo Showcase">
              <div class="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md border border-slate-800 flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-red-500">
                <img src="/images/gtc-logo.jpg" alt="GTC Solutions" class="w-full h-full object-contain" />
              </div>
              <div class="flex flex-col">
                <span class="text-xl font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                  GTC <span class="text-red-500">SOLUTIONS</span>
                  <svg class="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </span>
                <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Corporate Finance &amp; Business Advisory
                </span>
              </div>
            </button>

            <p class="text-xs font-semibold text-red-400 uppercase tracking-wider">
              Corporate Finance | Costing & Profitability | Taxation | Compliance | Business Advisory
            </p>

            <p class="text-base font-bold text-white">
              Helping Businesses Make Better Financial Decisions.
            </p>

            <p class="text-xs text-slate-400 flex items-center gap-2">
              <svg class="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span>Based in Coimbatore, Tamil Nadu | Supporting Businesses Across India</span>
            </p>

            <div class="pt-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                Pan-India Remote & On-Site Financial Operations
              </span>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" class="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" class="hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" class="hover:text-red-400 transition-colors">Portfolio</a></li>
              <li><a href="#why-us" class="hover:text-red-400 transition-colors">Why GTC Solutions</a></li>
              <li><a href="#faq" class="hover:text-red-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" class="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Services List -->
          <div class="lg:col-span-2 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" class="hover:text-red-400 transition-colors">Corporate Finance</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Costing & Profitability</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Accounting</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Taxation</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Compliance</a></li>
              <li><a href="#services" class="hover:text-red-400 transition-colors">Business Advisory</a></li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
            <div class="space-y-3 text-xs sm:text-sm text-slate-400">
              <a href="tel:+918438898767" class="flex items-center gap-2 hover:text-white transition-colors">
                <svg class="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+91 84388 98767</span>
              </a>
              <a href="mailto:gtcsolutions28@gmail.com" class="flex items-center gap-2 hover:text-white transition-colors truncate">
                <svg class="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span class="truncate">gtcsolutions28&#64;gmail.com</span>
              </a>
              <div class="flex items-start gap-2 pt-1 leading-relaxed">
                <svg class="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span class="text-xs">3/83, Kurumbapalayam, Belladhi Therampalayam Post, Pogalur Via, Kurumbapalayam – 641104, Tamil Nadu, India</span>
              </div>
            </div>

            <!-- WhatsApp Direct pill -->
            <div class="pt-2">
              <a href="https://wa.me/918438898767?text=Hello%20GTC%20Solutions" 
                 target="_blank" 
                 class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors">
                <span>Chat via WhatsApp</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

        </div>

        <!-- Sub Footer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 GTC Solutions. All Rights Reserved.</p>
          <div class="flex items-center space-x-6">
            <button (click)="openPrivacy()" class="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
            <span class="text-slate-700">&bull;</span>
            <button (click)="openTerms()" class="hover:text-slate-300 transition-colors cursor-pointer">Terms &amp; Conditions</button>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private modalService = inject(ModalService);

  openLogoModal(): void {
    this.modalService.openBrandModal();
  }

  openPrivacy(): void {
    this.modalService.openPrivacy();
  }

  openTerms(): void {
    this.modalService.openTerms();
  }
}
