import { TestBed } from '@angular/core/testing';

import { InfanciaService } from './infancia.service';

describe('InfanciaService', () => {
  let service: InfanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
