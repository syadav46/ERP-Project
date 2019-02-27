import { TestBed } from '@angular/core/testing';

import { ErpService } from './erp.service';

describe('ErpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErpService = TestBed.get(ErpService);
    expect(service).toBeTruthy();
  });
});
