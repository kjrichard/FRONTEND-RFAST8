import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const urlApi: any = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public customerData: any = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  get token (): string {
    return localStorage.getItem('token');
 }

  obtenerUsuario() {
    return this.http.get(`${ urlApi }/usuario`, {
      headers: { 'x-token': this.token }
    } );
  }
  obtenerPerfil() {
    return this.http.get(`${ urlApi }/perfiles`, {
      headers: { 'x-token': this.token }
    } );
  }

  obtenerPermisos() {
    return this.http.get(`${ urlApi }/listar-permisos`, {
      headers: { 'x-token': this.token }
    } );
  }


  crearUsuario(usuario: any) {
    return this.http.post(`${ urlApi }/usuario`, usuario, {
      headers: { 'x-token': this.token }
    } );
  }
  actualizarUsuario(usuario: any, id: number) {
    return this.http.patch(`${ urlApi }/usuario/`+id, usuario,{
      headers: { 'x-token': this.token }
    } );
  }
  actualizarEstadoUsuario(id: number, estado: boolean) {
    const url = `${ urlApi }/usuarios/${id}/estado`;
    const body = { estado };

    return this.http.put(url, body,{
      headers: { 'x-token': this.token }
    } );
  }

}
