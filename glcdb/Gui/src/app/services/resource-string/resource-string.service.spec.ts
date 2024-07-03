import { TestBed } from '@angular/core/testing';

import { ResourceStringService } from './resource-string.service';

describe('ResourceStringsService', () => {
  let service: ResourceStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
