import { TestBed } from '@angular/core/testing';

import { PrimeraInfanciaService } from './primera-infancia.service';

describe('PrimeraInfanciaService', () => {
  let service: PrimeraInfanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeraInfanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
