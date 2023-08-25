import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorderComponent } from './recorder.component';
import { GeneralButtonComponent } from '../shared/general-button/general-button.component';
import { TextBoxComponent } from 'src/app/shared/text-box/text-box.component';

describe('RecorderComponent', () => {
  let component: RecorderComponent;
  let fixture: ComponentFixture<RecorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecorderComponent,
        GeneralButtonComponent,
        TextBoxComponent,
      ],
    });
    fixture = TestBed.createComponent(RecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
