import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { environment } from 'src/environments/environment';

const urlApi: any = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class InfanciaService {

  public customerData: any = null;


  constructor(
    private http: HttpClient,
    private router: Router,
  )   { }

  getInfancia(page: number = 1) {
    return this.http.get(`${ urlApi }/infancia?page=${page}&limit=100` );
  }
  buscarInfancia(page: number = 1, arrayId) {
    return this.http.post(`${ urlApi }/infancia/buscar?page=${page}&limit=200`, arrayId );
  }


}
