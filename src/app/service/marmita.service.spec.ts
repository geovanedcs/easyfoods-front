import { TestBed } from '@angular/core/testing';

import { MarmitaService } from './marmita.service';

describe('MarmitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarmitaService = TestBed.get(MarmitaService);
    expect(service).toBeTruthy();
  });
});
