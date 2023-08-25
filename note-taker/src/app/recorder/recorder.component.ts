import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TextDataService } from '../core/text-data.service';

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

  constructor(private textDataService: TextDataService) {
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
      this.textDataService.saveText(this.recognizedText);
      this.isRecording = false;
      this.recognition.stop();
    }
  }

  displayText() {
    const storedTexts = this.textDataService.getStoredTexts();
    if (storedTexts.length > 0) {
      this.storedTexts = storedTexts;
      this.recognizedText = this.storedTexts.join(' ');
      this.updateRecognizedTextElement();
    }
  }

  clearRecord() {
    this.textDataService.clearText();
    this.recognizedText = '';
    this.storedTexts = [];
    this.updateRecognizedTextElement();
  }

  private updateRecognizedTextElement() {
    if (this.recognizedTextElement) {
      this.recognizedTextElement.nativeElement.innerText = this.recognizedText;
    }
  }
}
