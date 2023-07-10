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

  obtenerUsuario() {
    return this.http.get(`${ urlApi }/usuario`);
  }
  obtenerPerfil() {
    return this.http.get(`${ urlApi }/perfiles`);
  }
  crearUsuario(usuario: any) {
    return this.http.post(`${ urlApi }/usuario`, usuario);
  }
}
