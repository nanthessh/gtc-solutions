import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-policy-modals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Privacy Policy Modal -->
    <div *ngIf="modalService.isPrivacyModalOpen()" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div class="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
        <button (click)="modalService.closePrivacy()" class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <h3 class="text-2xl font-black text-slate-900 mb-2">Privacy Policy</h3>
        <p class="text-xs text-slate-500 mb-6">Last updated: 2026 &bull; GTC Solutions</p>

        <div class="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            At GTC Solutions, we respect your privacy and are committed to protecting the confidential financial, statutory, and corporate information you share with us.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">1. Information Collection</h4>
          <p>
            We collect information provided directly by you when submitting enquiries, scheduling consultations, or entering advisory agreements. This includes contact details, company information, and financial operational data required for service execution.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">2. Professional Confidentiality</h4>
          <p>
            All accounting files, GST credentials, cost sheets, and business performance metrics shared with GTC Solutions are treated with strict confidentiality under professional advisory non-disclosure standards.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">3. Contact Information</h4>
          <p>
            For any queries regarding this policy, reach us directly at gtcsolutions28&#64;gmail.com or +91 84388 98767.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 text-right">
          <button (click)="modalService.closePrivacy()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer">
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>

    <!-- Terms & Conditions Modal -->
    <div *ngIf="modalService.isTermsModalOpen()" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div class="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto">
        <button (click)="modalService.closeTerms()" class="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <h3 class="text-2xl font-black text-slate-900 mb-2">Terms &amp; Conditions</h3>
        <p class="text-xs text-slate-500 mb-6">Last updated: 2026 &bull; GTC Solutions</p>

        <div class="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            Welcome to the official website of GTC Solutions. By accessing or using our website and services, you agree to comply with the terms and conditions outlined herein.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">1. Nature of Services</h4>
          <p>
            GTC Solutions provides Corporate Finance, Costing &amp; Profitability, Accounting, Taxation, ROC/MCA Compliance, and Business Advisory services. All advisory advice is based on figures and documentation furnished by the client organization.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">2. Engagement Terms</h4>
          <p>
            Specific scope of work, deliverables, and service engagements are governed by individual client mandate letters or contracts executed between GTC Solutions and the respective business.
          </p>
          <h4 class="font-bold text-slate-900 text-sm">3. Jurisdiction</h4>
          <p>
            Any disputes or claims arising out of the website or business advisory contracts are subject to the exclusive jurisdiction of the competent courts in Coimbatore, Tamil Nadu, India.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-100 text-right">
          <button (click)="modalService.closeTerms()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer">
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  `
})
export class PolicyModalsComponent {
  modalService = inject(ModalService);
}
