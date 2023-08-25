import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecorderComponent } from './recorder/recorder.component';
import { GeneralButtonComponent } from './shared/general-button/general-button.component';
import { TextBoxComponent } from './shared/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RecorderComponent,
    GeneralButtonComponent,
    TextBoxComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
