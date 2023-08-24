import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextDataService {
  private storedTexts: string[] = [];

  constructor() {
    this.loadStoredTexts();
  }

  saveText(text: string) {
    if (text) {
      this.storedTexts.push(text);
      this.saveStoredTexts();
    }
  }

  clearText() {
    this.storedTexts = [];
    this.saveStoredTexts();
  }

  getStoredTexts(): string[] {
    return this.storedTexts;
  }

  private saveStoredTexts() {
    localStorage.setItem('storedTexts', JSON.stringify(this.storedTexts));
  }

  private loadStoredTexts() {
    const storedTexts = localStorage.getItem('storedTexts');
    if (storedTexts) {
      this.storedTexts = JSON.parse(storedTexts);
    }
  }
}
