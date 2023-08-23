import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css'],
})
export class RecorderComponent implements OnInit {
  @ViewChild('recognizedText') recognizedTextElement!: ElementRef;

  recognition: any;
  recognizedText = '';
  storedTexts: string[] = [];
  isRecording = false;

  constructor() {
    this.initRecognition();
  }

  ngOnInit(): void {
    this.displayText();
  }

  initRecognition() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ko-KR';
      this.setupRecognitionEvents();
    } else {
      console.error(
        'webkitSpeechRecognition is not supported in this browser.'
      );
    }
  }

  setupRecognitionEvents() {
    if (this.recognition) {
      this.recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join(' ');
        this.recognizedText = transcript.trim();
        this.updateRecognizedTextElement();
      };
    }
  }

  startRecord() {
    if (this.recognition) {
      this.recognition.start();
      this.isRecording = true;
    }
  }

  stopRecord() {
    if (this.recognition && this.isRecording) {
      this.saveText();
      this.recognition.stop();
    }
  }

  displayText() {
    const storedTexts = localStorage.getItem('storedTexts');
    if (storedTexts) {
      this.storedTexts = JSON.parse(storedTexts);
      this.recognizedText = this.storedTexts.join(' ');
      this.updateRecognizedTextElement();
    }
  }

  saveText() {
    if (this.recognizedText) {
      this.storedTexts.push(this.recognizedText);
      localStorage.setItem('storedTexts', JSON.stringify(this.storedTexts));
    }
  }

  clearRecord() {
    this.recognizedText = '';
    this.storedTexts = [];
    localStorage.removeItem('storedTexts');
    this.updateRecognizedTextElement();
  }

  private updateRecognizedTextElement() {
    if (this.recognizedTextElement) {
      this.recognizedTextElement.nativeElement.innerText = this.recognizedText;
    }
  }
}
