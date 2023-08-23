import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.css'],
})
export class RecorderComponent implements OnInit {
  @ViewChild('recognizedText') recognizedTextElement!: ElementRef;

  recognition: any;
  recognizedText: string = '';
  storedTexts: string[] = [];
  isRecording: boolean = false;

  constructor() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ko-KR';
    } else {
      console.error(
        'webkitSpeechRecognition is not supported in this browser.'
      );
    }
  }

  ngOnInit(): void {
    this.displayText();
  }

  startRecord() {
    if (this.recognition) {
      this.recognition.start();
      this.isRecording = true;
      this.recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript + ' ';
        }
        this.recognizedText = transcript.trim();
        this.updateRecognizedTextElement();
      };
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
