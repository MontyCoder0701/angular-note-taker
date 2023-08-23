import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-record-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.css'],
})
export class GeneralButtonComponent {
  @Input() label: string | undefined;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
