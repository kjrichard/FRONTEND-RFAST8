import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';


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

  exportarExcel(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel/${CODIGO}/${edadInicial}/${edadFinal}`);
  }

  login( data: any ) {
    return this.http.post(`${ urlApi }/login/`, data );
  }
  validarToken(): Observable<Boolean> {
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${ urlApi }/validar-token`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res: any) =>{
        localStorage.setItem('token', res.token);
      }),
      map( res => true ),
      catchError(error => of(false))
    )
  }

}
