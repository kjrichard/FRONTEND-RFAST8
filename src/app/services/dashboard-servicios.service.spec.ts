import { TestBed } from '@angular/core/testing';

import { DashboardServiciosService } from './dashboard-servicios.service';

describe('DashboardServiciosService', () => {
  let service: DashboardServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
