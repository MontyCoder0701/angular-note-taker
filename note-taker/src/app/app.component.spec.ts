import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RecorderComponent } from './core/recorder/recorder.component';
import { GeneralButtonComponent } from './shared/general-button/general-button.component';
import { TextBoxComponent } from './shared/text-box/text-box.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        RecorderComponent,
        GeneralButtonComponent,
        TextBoxComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
