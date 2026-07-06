import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  clickCount = 0;
  showModal = false;
  themeMode: 'light' | 'dark' = 'light';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const mode =
      (this.document.body.getAttribute('data-fds-theme-mode') as 'light' | 'dark' | null) ??
      'light';
    this.setThemeMode(mode);
  }

  handleButtonClick() {
    this.clickCount += 1;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  setThemeMode(mode: 'light' | 'dark') {
    this.themeMode = mode;
    this.document.body.setAttribute('data-fds-theme', 'lifesg');
    this.document.body.setAttribute('data-fds-theme-mode', mode);
  }
}
