import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // @ts-ignore
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
