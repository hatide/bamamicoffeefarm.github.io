import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'vi';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = signal<Language>('vi');

  get language() {
    return this.currentLang.asReadonly();
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }

  translate(en: string, vi: string): string {
    return this.currentLang() === 'en' ? en : vi;
  }
}
