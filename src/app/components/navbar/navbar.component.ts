import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Contact Bar -->
    <div class="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300 hidden md:block">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <span class="flex items-center gap-1.5 text-slate-300">
            <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            Based in Coimbatore, Tamil Nadu &bull; Supporting Businesses Across India
          </span>
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-950/80 text-red-300 border border-red-800/60">
            Est. 2024
          </span>
        </div>
        <div class="flex items-center space-x-6">
          <a href="tel:+918438898767" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 84388 98767
          </a>
          <a href="mailto:gtcsolutions28@gmail.com" class="flex items-center gap-1.5 hover:text-white transition-colors">
            <svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            gtcsolutions28&#64;gmail.com
          </a>
          <a href="https://wa.me/918438898767?text=Hello%20GTC%20Solutions,%20I%20would%20like%20to%20discuss%20a%20business%20requirement" 
             target="_blank" 
             class="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.606-5.768-5.706zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.072-2.275-.583-1.884-.785-3.08-2.709-3.174-2.834-.094-.125-.769-1.023-.769-1.95 0-.928.487-1.385.66-1.574.174-.189.38-.236.507-.236.126 0 .252.002.361.008.115.006.27-.044.422.321.157.378.536 1.309.584 1.405.047.095.079.206.016.332-.063.126-.094.205-.189.315-.095.11-.2.247-.285.332-.095.095-.195.198-.084.388.11.19.49 1.133 1.325 1.874.835.741 1.54.972 1.761 1.082.221.11.352.095.483-.055.131-.15.563-.654.714-.88.15-.226.302-.19.507-.113.205.077 1.303.614 1.528.726.225.112.375.168.43.264.056.095.056.552-.088.957z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Main Floating Glass Navbar -->
    <header [class.shadow-xl]="isScrolled()" 
            [class.bg-white]="isScrolled()" 
            [class.bg-white/95]="!isScrolled()"
            class="sticky top-0 z-50 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo & Identity -->
          <a href="#" class="flex items-center gap-3.5 group">
            <div class="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md border border-slate-200 p-1 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img src="/images/gtc-logo.jpg" alt="GTC Solutions Logo" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                GTC <span class="text-red-600">SOLUTIONS</span>
              </span>
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Corporate Finance & Advisory
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <a href="#home" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">Home</a>
            <a href="#about" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">About Us</a>
            <a href="#services" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">Services</a>
            <a href="#portfolio" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">Portfolio</a>
            <a href="#why-us" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">Why GTC</a>
            <a href="#faq" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">FAQ</a>
            <a href="#contact" class="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-slate-50 transition-colors">Contact</a>
          </nav>

          <!-- Action CTA & Mobile Trigger -->
          <div class="flex items-center gap-3">
            <button (click)="openBooking()" 
                    class="relative group overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span class="relative z-10 flex items-center gap-2">
                <span>Book a Consultation</span>
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>

            <!-- Mobile Hamburger Button -->
            <button (click)="toggleMobileMenu()" 
                    class="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                    aria-label="Toggle navigation menu">
              <svg *ngIf="!mobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="mobileMenuOpen()" class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div *ngIf="mobileMenuOpen()" class="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl transition-all animate-fadeIn">
        <div class="flex flex-col space-y-2 font-medium text-slate-800">
          <a (click)="closeMobileMenu()" href="#home" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">Home</a>
          <a (click)="closeMobileMenu()" href="#about" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">About Us</a>
          <a (click)="closeMobileMenu()" href="#services" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">Services (6 Capabilities)</a>
          <a (click)="closeMobileMenu()" href="#portfolio" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">Portfolio</a>
          <a (click)="closeMobileMenu()" href="#why-us" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">Why GTC Solutions</a>
          <a (click)="closeMobileMenu()" href="#faq" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">FAQ</a>
          <a (click)="closeMobileMenu()" href="#contact" class="px-4 py-2.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">Contact</a>
        </div>
        
        <div class="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
          <a href="tel:+918438898767" class="flex items-center gap-2 text-sm text-slate-600 px-4 py-1">
            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 84388 98767
          </a>
          <button (click)="openBooking(); closeMobileMenu()" class="w-full bg-red-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-red-700 transition-colors">
            Book a Consultation
          </button>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  private modalService = inject(ModalService);
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  openBooking(): void {
    this.modalService.openConsultation('General Advisory & Consultation');
  }
}
