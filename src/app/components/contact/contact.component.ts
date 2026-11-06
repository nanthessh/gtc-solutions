import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

interface ContactFormData {
  name: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  serviceRequired: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            Connect With GTC
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Have a Business or Financial Requirement?
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            Tell us what your business needs. Let's identify the right solution together. Whether you need support with Corporate Finance, Costing, Accounting, Taxation, Compliance, or Business Advisory, get in touch with GTC Solutions.
          </p>

          <!-- Top Quick Action CTA Buttons -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#enquiry-form" class="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-md">
              Discuss Your Requirement
            </a>
            <button (click)="openBooking()" class="px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs sm:text-sm hover:bg-red-700 transition-colors shadow-md cursor-pointer">
              Book a Consultation
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="enquiry-form">
          
          <!-- Left Column: Direct Contact & Office Details -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 class="text-xl font-bold mb-2">Prefer to Talk Directly?</h3>
              <p class="text-xs text-slate-400 mb-6">Reach out to our leadership directly via phone, WhatsApp, or email.</p>

              <!-- Contact Methods -->
              <div class="space-y-4">
                
                <!-- Phone -->
                <a href="tel:+918438898767" class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group">
                  <div class="w-11 h-11 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Call Directly</span>
                    <span class="text-sm sm:text-base font-extrabold text-white group-hover:text-red-400 transition-colors">+91 84388 98767</span>
                  </div>
                </a>

                <!-- WhatsApp -->
                <a href="https://wa.me/918438898767?text=Hello%20GTC%20Solutions,%20I%20would%20like%20to%20discuss%20a%20business%20requirement" 
                   target="_blank" 
                   class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group">
                  <div class="w-11 h-11 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.606-5.768-5.706zm3.393 8.163c-.144.405-.837.774-1.17.822-.312.043-.703.072-2.275-.583-1.884-.785-3.08-2.709-3.174-2.834-.094-.125-.769-1.023-.769-1.95 0-.928.487-1.385.66-1.574.174-.189.38-.236.507-.236.126 0 .252.002.361.008.115.006.27-.044.422.321.157.378.536 1.309.584 1.405.047.095.079.206.016.332-.063.126-.094.205-.189.315-.095.11-.2.247-.285.332-.095.095-.195.198-.084.388.11.19.49 1.133 1.325 1.874.835.741 1.54.972 1.761 1.082.221.11.352.095.483-.055.131-.15.563-.654.714-.88.15-.226.302-.19.507-.113.205.077 1.303.614 1.528.726.225.112.375.168.43.264.056.095.056.552-.088.957z"/>
                    </svg>
                  </div>
                  <div>
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Instant</span>
                    <span class="text-sm sm:text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">+91 84388 98767</span>
                  </div>
                </a>

                <!-- Email -->
                <a href="mailto:gtcsolutions28@gmail.com" class="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all group">
                  <div class="w-11 h-11 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="truncate">
                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Email Us</span>
                    <span class="text-sm sm:text-base font-extrabold text-white group-hover:text-blue-400 transition-colors truncate block">gtcsolutions28&#64;gmail.com</span>
                  </div>
                </a>

              </div>

              <!-- Service Area Badge -->
              <div class="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Supporting Businesses Across India</span>
              </div>
            </div>

            <!-- Address Card -->
            <div class="bg-slate-50 rounded-3xl p-7 border border-slate-200">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Corporate Address</h4>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    3/83, Kurumbapalayam, Belladhi Therampalayam Post, Pogalur Via, Kurumbapalayam – 641104, Tamil Nadu, India
                  </p>
                  <a href="https://maps.google.com/?q=Kurumbapalayam,Tamil+Nadu,India" 
                     target="_blank" 
                     class="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 mt-3 hover:underline">
                    <span>Open in Google Maps</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl floating-shadow relative">
              
              <!-- Form Success State -->
              <div *ngIf="isSubmitted()" class="text-center py-12 animate-fadeIn">
                <div class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                <p class="text-base text-slate-600 max-w-md mx-auto mb-6 font-medium">
                  Your enquiry has been received. GTC Solutions will get back to you shortly.
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                  <button (click)="resetForm()" 
                          class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors">
                    Send Another Enquiry
                  </button>
                  <a [href]="getWhatsAppEnquiryUrl()" 
                     target="_blank" 
                     class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2">
                    <span>Forward to WhatsApp</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </div>

              <!-- Main Input Form -->
              <form *ngIf="!isSubmitted()" (ngSubmit)="submitForm()" class="space-y-5">
                
                <div class="border-b border-slate-100 pb-4 mb-2">
                  <h3 class="text-xl font-black text-slate-900">Send an Enquiry</h3>
                  <p class="text-xs text-slate-500 mt-1">Fill out the details below and we will contact you within 24 hours.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Name -->
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span class="text-red-500">*</span>
                    </label>
                    <input type="text" 
                           name="name" 
                           [(ngModel)]="formData.name" 
                           required 
                           placeholder="e.g. Rajesh Kumar" 
                           class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all" />
                  </div>

                  <!-- Company Name -->
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company Name <span class="text-red-500">*</span>
                    </label>
                    <input type="text" 
                           name="companyName" 
                           [(ngModel)]="formData.companyName" 
                           required 
                           placeholder="e.g. Apex Enterprises Pvt Ltd" 
                           class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <!-- Phone Number -->
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span class="text-red-500">*</span>
                    </label>
                    <input type="tel" 
                           name="phoneNumber" 
                           [(ngModel)]="formData.phoneNumber" 
                           required 
                           placeholder="+91 98765 43210" 
                           class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all" />
                  </div>

                  <!-- Email Address -->
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input type="email" 
                           name="emailAddress" 
                           [(ngModel)]="formData.emailAddress" 
                           required 
                           placeholder="rajesh&#64;company.com" 
                           class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all" />
                  </div>
                </div>

                <!-- Service Required Dropdown -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service Required <span class="text-red-500">*</span>
                  </label>
                  <select name="serviceRequired" 
                          [(ngModel)]="formData.serviceRequired" 
                          required
                          class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all cursor-pointer">
                    <option value="" disabled selected>Select a Service</option>
                    <option value="Corporate Finance">Corporate Finance</option>
                    <option value="Costing & Profitability">Costing & Profitability</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Taxation">Taxation</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Business Advisory">Business Advisory</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Requirement Notes
                  </label>
                  <textarea name="message" 
                            [(ngModel)]="formData.message" 
                            rows="4" 
                            placeholder="Please briefly explain your requirement, timeline, or current challenge..." 
                            class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"></textarea>
                </div>

                <!-- Submit Button -->
                <div>
                  <button type="submit" 
                          [disabled]="isSubmitting()"
                          class="w-full py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 shadow-xl shadow-red-600/30 hover:shadow-red-600/45 hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75">
                    <span *ngIf="!isSubmitting()">Send Enquiry</span>
                    <span *ngIf="isSubmitting()" class="flex items-center gap-2">
                      <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Processing...
                    </span>
                    <svg *ngIf="!isSubmitting()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

        <!-- 11. FINAL CTA BANNER -->
        <div class="mt-24 relative rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-slate-900 p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div class="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl">
            <span class="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              Let's Build Better Financial Clarity
            </span>
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Ready to Discuss Your Requirement?
            </h3>
            <p class="text-base sm:text-lg text-red-100 max-w-2xl mb-8 leading-relaxed">
              Tell us what your business needs and let's identify the right financial or business solution.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <button (click)="openBooking()" 
                      class="px-8 py-4 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 shadow-xl transition-all hover:scale-105 cursor-pointer">
                Book a Consultation
              </button>
              <a href="#contact" 
                 class="px-8 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  private modalService = inject(ModalService);

  formData: ContactFormData = {
    name: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceRequired: 'Corporate Finance',
    message: ''
  };

  isSubmitting = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);

  openBooking(): void {
    this.modalService.openConsultation(this.formData.serviceRequired || 'Direct Business Requirement');
  }

  submitForm(): void {
    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
    }, 800);
  }

  resetForm(): void {
    this.isSubmitted.set(false);
    this.formData = {
      name: '',
      companyName: '',
      phoneNumber: '',
      emailAddress: '',
      serviceRequired: 'Corporate Finance',
      message: ''
    };
  }

  getWhatsAppEnquiryUrl(): string {
    const text = encodeURIComponent(
      `Hello GTC Solutions,\n\nName: ${this.formData.name}\nCompany: ${this.formData.companyName}\nPhone: ${this.formData.phoneNumber}\nEmail: ${this.formData.emailAddress}\nService: ${this.formData.serviceRequired}\nMessage: ${this.formData.message || 'I would like to discuss our requirements.'}`
    );
    return `https://wa.me/918438898767?text=${text}`;
  }
}
