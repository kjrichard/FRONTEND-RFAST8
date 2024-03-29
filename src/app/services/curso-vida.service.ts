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
  public USUARIO: any;


  constructor(
    private http: HttpClient,
    private router: Router,
  )   { }

 get token (): string {
    return localStorage.getItem('token');
 }

  obtenerCursoVida(page: number = 1, CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/curso-vida/${CODIGO}/${edadInicial}/${edadFinal}?page=${page}&limit`, {
      headers: { 'x-token': this.token }
    } );
  }

  buscarCursoVida(page: number = 1, arrayId: any, CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.post(`${ urlApi }/curso-vida/buscar/${CODIGO}/${edadInicial}/${edadFinal}?page=${page}&limit`, arrayId , {
      headers: { 'x-token': this.token }
    } );
  }

  exportarExcel(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel1(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel1/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel2(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel2/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel3(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel3/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel4(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel4/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel5(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel5/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }
  exportarExcel6(CODIGO: number, edadInicial: number, edadFinal: number) {
    return this.http.get(`${ urlApi }/exportar-excel6/${CODIGO}/${edadInicial}/${edadFinal}`, {
      headers: { 'x-token': this.token }
    } );
  }

  login( data: any ) {
    return this.http.post(`${ urlApi }/login/`, data );
  }
  validarToken(id: number ): Observable<Boolean> {
    id = +localStorage.getItem('id_usuario') ;
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ urlApi }/validar-token/${id}`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res: any) =>{

        this.USUARIO = res.usuarioLogeado;
        localStorage.setItem('token', res.token);
      }),
      map( res => true ),
      catchError(error => of(false))
    )
  }

}
