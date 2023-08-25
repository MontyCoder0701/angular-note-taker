import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralButtonComponent } from './general-button/general-button.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GeneralButtonComponent, TextBoxComponent],
  exports: [GeneralButtonComponent, TextBoxComponent],
})
export class SharedModule {}
