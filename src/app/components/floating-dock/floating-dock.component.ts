import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-floating-dock',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Floating Bottom-Right Quick Action Dock -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      <!-- Back to Top Button -->
      <button *ngIf="showBackToTop()" 
              (click)="scrollToTop()" 
              class="pointer-events-auto p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer border border-slate-700/60"
              title="Back to Top"
              aria-label="Back to Top">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <!-- Main Floating Action Pill -->
      <div class="pointer-events-auto flex items-center gap-2 p-1.5 rounded-full bg-white/95 shadow-2xl border border-slate-200/90 backdrop-blur-xl floating-shadow animate-float-slow">
        
        <!-- Direct Call Pill -->
        <a href="tel:+918438898767" 
           title="Call Gowtham" 
           class="p-2.5 rounded-full bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>

        <!-- WhatsApp Instant Chat with Glowing Pulse -->
        <a href="https://wa.me/918438898767?text=Hello%20GTC%20Solutions,%20I%20would%20like%20to%20book%20a%20consultation" 
           target="_blank" 
           title="Chat on WhatsApp" 
           class="relative p-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-md hover:scale-105">
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 border-2 border-white"></span>
          </span>
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.606-5.768-5.706zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.072-2.275-.583-1.884-.785-3.08-2.709-3.174-2.834-.094-.125-.769-1.023-.769-1.95 0-.928.487-1.385.66-1.574.174-.189.38-.236.507-.236.126 0 .252.002.361.008.115.006.27-.044.422.321.157.378.536 1.309.584 1.405.047.095.079.206.016.332-.063.126-.094.205-.189.315-.095.11-.2.247-.285.332-.095.095-.195.198-.084.388.11.19.49 1.133 1.325 1.874.835.741 1.54.972 1.761 1.082.221.11.352.095.483-.055.131-.15.563-.654.714-.88.15-.226.302-.19.507-.113.205.077 1.303.614 1.528.726.225.112.375.168.43.264.056.095.056.552-.088.957z"/>
          </svg>
        </a>

        <!-- Quick Consultation Trigger Button -->
        <button (click)="openBooking()" 
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition-all hover:shadow-lg cursor-pointer">
          <span>Book Consultation</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </div>
  `
})
export class FloatingDockComponent {
  private modalService = inject(ModalService);
  showBackToTop = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openBooking(): void {
    this.modalService.openConsultation('Floating Quick Booking');
  }
}
