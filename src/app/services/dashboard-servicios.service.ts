import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urlApi: any = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiciosService {

  public customerData: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  obtenerServicio() {
    return this.http.get(`${ urlApi }/dashboard-servicios`);
  }
}
