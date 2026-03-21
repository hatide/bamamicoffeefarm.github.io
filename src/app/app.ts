import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService, Language } from './language';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public langService = inject(LanguageService);

  constructor() {
    // App initialized
  }

  images = [
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop', // Hero
    'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop', // Processing
    'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800&auto=format&fit=crop', // Landscape
    'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop', // Harvesting
    'https://images.unsplash.com/photo-1620052581237-5d36667cb30f?q=80&w=800&auto=format&fit=crop', // Cherries
    'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop', // Unused
    'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?q=80&w=800&auto=format&fit=crop', // Drying
    'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop', // Step 1
    'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=800&auto=format&fit=crop', // Step 2
    'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop'  // Step 3
  ];

  t(en: string, vi: string) {
    return this.langService.translate(en, vi);
  }

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
}
