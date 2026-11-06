import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  readonly isConsultationOpen = signal<boolean>(false);
  readonly selectedService = signal<string>('Corporate Finance');
  readonly isPrivacyModalOpen = signal<boolean>(false);
  readonly isTermsModalOpen = signal<boolean>(false);

  openConsultation(serviceName: string = 'Corporate Finance'): void {
    this.selectedService.set(serviceName);
    this.isConsultationOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeConsultation(): void {
    this.isConsultationOpen.set(false);
    document.body.style.overflow = '';
  }

  openPrivacy(): void {
    this.isPrivacyModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closePrivacy(): void {
    this.isPrivacyModalOpen.set(false);
    document.body.style.overflow = '';
  }

  openTerms(): void {
    this.isTermsModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeTerms(): void {
    this.isTermsModalOpen.set(false);
    document.body.style.overflow = '';
  }
}
