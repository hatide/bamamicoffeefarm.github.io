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
  langService = inject(LanguageService);

  images = [
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_0.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_1.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_2.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_3.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_4.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_5.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741011267812_6.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741013158025_0.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741013158025_1.png',
    'https://storage.googleapis.com/m-infra.appspot.com/v/ais-dev-74fvbuzkc4evbzkpw3cgxo-405262506133.asia-east1.run.app/1741013158025_2.png'
  ];

  t(en: string, vi: string) {
    return this.langService.translate(en, vi);
  }

  setLang(lang: Language) {
    this.langService.setLanguage(lang);
  }
}
