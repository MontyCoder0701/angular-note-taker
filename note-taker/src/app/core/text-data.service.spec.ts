import { TestBed } from '@angular/core/testing';
import { TextDataService } from './text-data.service';

describe('TextDataService', () => {
  let service: TextDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextDataService],
    });
    service = TestBed.inject(TextDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
