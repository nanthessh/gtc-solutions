import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-consultation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Floating Modal Backdrop -->
    <div *ngIf="modalService.isConsultationOpen()" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md transition-all animate-fadeIn">
      
      <!-- Modal Box -->
      <div class="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        <!-- Red Top Accent Bar -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-red-800"></div>

        <!-- Close Button -->
        <button (click)="close()" 
                class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Success Message -->
        <div *ngIf="isSuccess()" class="text-center py-8">
          <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Consultation Booked!</h3>
          <p class="text-sm text-slate-600 mb-6">
            Thank you! Your consultation request has been received. Our advisory team will connect with you shortly.
          </p>
          <div class="flex flex-col gap-2">
            <a [href]="getWhatsAppBookingUrl()" 
               target="_blank" 
               class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors">
              <span>Send Confirmation on WhatsApp</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <button (click)="close()" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors">
              Close Window
            </button>
          </div>
        </div>

        <!-- Consultation Form -->
        <div *ngIf="!isSuccess()">
          <div class="mb-5">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider mb-2">
              Book a Consultation
            </div>
            <h3 class="text-2xl font-black text-slate-900">Let's Discuss Your Finances</h3>
            <p class="text-xs text-slate-500 mt-1">Direct advisory session with Gowtham &amp; the GTC Solutions team.</p>
          </div>

          <form (ngSubmit)="submit()" class="space-y-4">
            
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input type="text" 
                     name="fullName" 
                     [(ngModel)]="name" 
                     required 
                     placeholder="e.g. Anand Sharma"
                     class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp <span class="text-red-500">*</span>
                </label>
                <input type="tel" 
                       name="phone" 
                       [(ngModel)]="phone" 
                       required 
                       placeholder="+91 98765 43210"
                       class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address
                </label>
                <input type="email" 
                       name="email" 
                       [(ngModel)]="email" 
                       placeholder="anand&#64;company.com"
                       class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Company &amp; Industry
              </label>
              <input type="text" 
                     name="company" 
                     [(ngModel)]="company" 
                     placeholder="e.g. Prime Logistics, Coimbatore"
                     class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Service Focus
              </label>
              <select name="service" 
                      [(ngModel)]="service" 
                      class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer">
                <option value="Corporate Finance">Corporate Finance (Planning, Cash Flow &amp; Capital)</option>
                <option value="Costing & Profitability">Costing &amp; Profitability (Product Costing &amp; Margins)</option>
                <option value="Accounting">Accounting (Bookkeeping, Tally &amp; MIS)</option>
                <option value="Taxation">Taxation (GST, Income Tax &amp; TDS)</option>
                <option value="Compliance">Compliance (ROC/MCA, Udyam &amp; Statutory)</option>
                <option value="Business Advisory">Business Advisory (Strategy, Growth &amp; Risk)</option>
                <option value="General Advisory & Consultation">General Business Consultation</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Preferred Mode &amp; Time
              </label>
              <input type="text" 
                     name="timing" 
                     [(ngModel)]="timing" 
                     placeholder="e.g. Phone call tomorrow at 3 PM or Google Meet"
                     class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <button type="submit" 
                    [disabled]="isLoading()"
                    class="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:from-red-500 hover:to-red-600 transition-all cursor-pointer disabled:opacity-75">
              <span *ngIf="!isLoading()">Confirm Consultation Request</span>
              <span *ngIf="isLoading()">Booking...</span>
            </button>

            <p class="text-[11px] text-center text-slate-400">
              Direct connection with GTC Solutions. No spam, ever.
            </p>
          </form>
        </div>

      </div>
    </div>
  `
})
export class ConsultationModalComponent {
  modalService = inject(ModalService);

  name: string = '';
  phone: string = '';
  email: string = '';
  company: string = '';
  service: string = 'Corporate Finance';
  timing: string = '';

  isLoading = signal<boolean>(false);
  isSuccess = signal<boolean>(false);

  constructor() {
    // initialize service from modalService signal
    const s = this.modalService.selectedService();
    if (s) {
      this.service = s;
    }
  }

  close(): void {
    this.modalService.closeConsultation();
    this.isSuccess.set(false);
  }

  submit(): void {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSuccess.set(true);
    }, 600);
  }

  getWhatsAppBookingUrl(): string {
    const text = encodeURIComponent(
      `Hello Gowtham / GTC Solutions,\n\nI have booked a consultation request on the website:\n- Name: ${this.name}\n- Phone: ${this.phone}\n- Company: ${this.company || 'Not specified'}\n- Service Focus: ${this.service}\n- Preferred Time/Mode: ${this.timing || 'Immediate callback'}\n\nLooking forward to speaking with you.`
    );
    return `https://wa.me/918438898767?text=${text}`;
  }
}
