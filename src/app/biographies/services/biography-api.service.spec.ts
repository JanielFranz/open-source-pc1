import { TestBed } from '@angular/core/testing';

import { BiographyApiService } from './biography-api.service';

describe('BiographyApiService', () => {
  let service: BiographyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
