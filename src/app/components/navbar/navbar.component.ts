import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Reading / Scroll Progress Bar at the absolute top -->
    <div class="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[60] pointer-events-none">
      <div class="h-full bg-gradient-to-r from-red-600 via-red-500 to-rose-400 shadow-[0_0_10px_rgba(220,38,38,0.7)] transition-all duration-150 ease-out"
           [style.width.%]="scrollProgress()"></div>
    </div>

    <!-- Top Info Bar (Desktop only, fades smoothly on scroll) -->
    <div *ngIf="!isScrolled()" 
         class="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-all duration-300 hidden md:block">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <span class="flex items-center gap-1.5 text-slate-300 font-medium">
            <svg class="w-3.5 h-3.5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            Coimbatore, Tamil Nadu &bull; Supporting Businesses Across India
          </span>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-950/90 text-red-300 border border-red-800/60 shadow-xs">
            ⚡ Est. 2024 by Gowtham
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
             class="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.606-5.768-5.706zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.072-2.275-.583-1.884-.785-3.08-2.709-3.174-2.834-.094-.125-.769-1.023-.769-1.95 0-.928.487-1.385.66-1.574.174-.189.38-.236.507-.236.126 0 .252.002.361.008.115.006.27-.044.422.321.157.378.536 1.309.584 1.405.047.095.079.206.016.332-.063.126-.094.205-.189.315-.095.11-.2.247-.285.332-.095.095-.195.198-.084.388.11.19.49 1.133 1.325 1.874.835.741 1.54.972 1.761 1.082.221.11.352.095.483-.055.131-.15.563-.654.714-.88.15-.226.302-.19.507-.113.205.077 1.303.614 1.528.726.225.112.375.168.43.264.056.095.056.552-.088.957z"/>
            </svg>
            WhatsApp Instant
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar: Automatically morphs into a Floating Island Capsule on scroll -->
    <header class="sticky top-0 z-50 transition-all duration-500 ease-out"
            [class.px-4]="isScrolled()"
            [class.pt-3]="isScrolled()"
            [class.px-0]="!isScrolled()"
            [class.pt-0]="!isScrolled()">
      
      <div [class.max-w-7xl]="!isScrolled()"
           [class.max-w-6xl]="isScrolled()"
           [class.rounded-2xl]="isScrolled()"
           [class.shadow-2xl]="isScrolled()"
           [class.border]="isScrolled()"
           [class.border-slate-200/90]="isScrolled()"
           [class.bg-white/95]="isScrolled()"
           [class.backdrop-blur-2xl]="isScrolled()"
           [class.bg-white/90]="!isScrolled()"
           [class.backdrop-blur-xl]="!isScrolled()"
           [class.border-b]="!isScrolled()"
           class="mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500">
        
        <div class="flex items-center justify-between"
             [class.h-16]="isScrolled()"
             [class.h-20]="!isScrolled()">
          
          <!-- Brand Logo & Identity: Clicking opens Brand Modal -->
          <button (click)="openLogoModal()" 
                  type="button"
                  class="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
                  title="Click to view GTC Solutions Brand Profile & Logo Showcase">
            <div class="relative w-11 h-11 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200/90 p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-red-400">
              <img src="/images/gtc-logo.jpg" alt="GTC Solutions Logo" class="w-full h-full object-contain" />
              <!-- Subtle red glow on hover -->
              <span class="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5">
                GTC <span class="text-red-600">SOLUTIONS</span>
                <span class="w-1.5 h-1.5 rounded-full bg-red-600 opacity-75 group-hover:scale-150 transition-transform"></span>
              </span>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-700">
                Corporate Finance & Advisory
              </span>
            </div>
          </button>

          <!-- Desktop Navigation with Active Scroll-Spy Indicator Pills -->
          <nav class="hidden lg:flex items-center space-x-1 font-semibold text-xs text-slate-700">
            <button *ngFor="let item of navItems" 
                    (click)="smoothScroll($event, item.id)"
                    [class.bg-red-50]="activeSection() === item.id"
                    [class.text-red-600]="activeSection() === item.id"
                    [class.font-bold]="activeSection() === item.id"
                    [class.border]="activeSection() === item.id"
                    [class.border-red-200]="activeSection() === item.id"
                    [class.shadow-xs]="activeSection() === item.id"
                    class="px-3.5 py-2 rounded-xl transition-all duration-200 hover:text-red-600 hover:bg-slate-100/70 cursor-pointer">
              {{ item.label }}
            </button>
          </nav>

          <!-- Primary CTA & Mobile Hamburger -->
          <div class="flex items-center gap-3">
            <button (click)="openBooking()" 
                    class="relative group overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:from-red-500 hover:to-red-600 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span class="relative z-10 flex items-center gap-2">
                <span>Book a Consultation</span>
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            </button>

            <!-- Mobile Hamburger Button -->
            <button (click)="toggleMobileMenu()" 
                    class="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
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
      <div *ngIf="mobileMenuOpen()" 
           class="lg:hidden mx-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl p-5 shadow-2xl transition-all animate-fadeIn">
        <div class="flex flex-col space-y-1.5 font-bold text-sm text-slate-800">
          <button *ngFor="let item of navItems"
                  (click)="smoothScroll($event, item.id); closeMobileMenu()"
                  [class.bg-red-50]="activeSection() === item.id"
                  [class.text-red-600]="activeSection() === item.id"
                  class="text-left px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-between">
            <span>{{ item.label }}</span>
            <span *ngIf="activeSection() === item.id" class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          </button>
        </div>
        
        <div class="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
          <button (click)="openLogoModal(); closeMobileMenu()" class="w-full bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
            <span>View GTC Brand Profile</span>
            <svg class="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </button>
          <a href="tel:+918438898767" class="flex items-center gap-2 text-xs font-semibold text-slate-700 px-4 py-1">
            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Direct Call: +91 84388 98767
          </a>
          <button (click)="openBooking(); closeMobileMenu()" class="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-red-700 transition-colors text-xs cursor-pointer">
            Book a Consultation
          </button>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  private modalService = inject(ModalService);

  isScrolled = signal<boolean>(false);
  scrollProgress = signal<number>(0);
  mobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('home');

  readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'why-us', label: 'Why GTC Solutions' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 25);

    // Calculate reading progress
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = docHeight - winHeight;
    const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
    this.scrollProgress.set(Math.min(100, Math.max(0, progress)));

    // Scroll spy: identify which section is currently active
    const sections = ['contact', 'faq', 'why-us', 'portfolio', 'services', 'about', 'home'];
    const threshold = scrollY + 160;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= threshold) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  smoothScroll(event: Event, sectionId: string): void {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  openLogoModal(): void {
    this.modalService.openBrandModal();
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
