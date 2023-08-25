import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecorderComponent } from './recorder.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

describe('RecorderComponent', () => {
  let component: RecorderComponent;
  let fixture: ComponentFixture<RecorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecorderComponent],
      imports: [CoreModule, SharedModule],
    });
    fixture = TestBed.createComponent(RecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
