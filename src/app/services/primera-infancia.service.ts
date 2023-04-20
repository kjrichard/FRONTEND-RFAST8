import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urlApi: any = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PrimeraInfanciaService {

  public customerData: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getPrimeraInfancia() {
    return this.http.get(`${ urlApi }/primera-infancia`)
  }
}
