import { TestBed } from '@angular/core/testing';

import { TravelsectionService } from './travelsection.service';

describe('TravelsectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelsectionService = TestBed.get(TravelsectionService);
    expect(service).toBeTruthy();
  });
});
