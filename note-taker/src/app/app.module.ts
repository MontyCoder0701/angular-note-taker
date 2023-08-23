import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecorderComponent } from './recorder/recorder.component';
import { GeneralButtonComponent } from './general-button/general-button.component';

@NgModule({
  declarations: [AppComponent, RecorderComponent, GeneralButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
