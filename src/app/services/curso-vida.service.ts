import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urlApi: any = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CursoVidaService {

  public customerData: any = null;


  constructor(
    private http: HttpClient,
    private router: Router,
  )   { }

  obtenerCursoVida(page: number = 1, CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/curso-vida/${CODIGO}/${edadInicial}/${edadFinal}?page=${page}&limit=100` );
  }

  buscarCursoVida(page: number = 1, arrayId: any, CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.post(`${ urlApi }/curso-vida/buscar/${CODIGO}/${edadInicial}/${edadFinal}?page=${page}&limit=100`, arrayId );
  }

  login( data: any ) {
    return this.http.post(`${ urlApi }/curso-vida/login/`, data );
  }


}
