import { TestBed, inject } from '@angular/core/testing';

import { IndustryApiService } from './industry-api.service';

describe('IndustryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryApiService]
    });
  });

  it('should be created', inject([IndustryApiService], (service: IndustryApiService) => {
    expect(service).toBeTruthy();
  }));
});
