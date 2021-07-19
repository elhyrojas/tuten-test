import { TestBed } from '@angular/core/testing';

import { UtcService } from './utc.service';

describe('UtcService', () => {
  let service: UtcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
