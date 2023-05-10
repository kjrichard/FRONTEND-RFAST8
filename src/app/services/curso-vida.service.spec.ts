import { TestBed } from '@angular/core/testing';

import { CursoVidaService } from './curso-vida.service';

describe('CursoVidaService', () => {
  let service: CursoVidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoVidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
