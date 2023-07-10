import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import Swal from 'sweetalert2';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})

export class UserComponent implements OnInit {
  @ViewChild('addEmployeeModal') modalElement: ElementRef;
  public listaUsuarios: any = [];
  public usuarioFormulario: FormGroup = null;
  public listaPerfiles: any = [];
  constructor(private usuariosService: UsuariosService, private fb: FormBuilder) {}

  ngOnInit() {
    this.obtenerUsuario();
    this.obtenerPerfil();
    this.usuarioFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      id_perfil: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.min(7)]]
    });
  }

  obtenerUsuario() {
    this.usuariosService.obtenerUsuario().subscribe( (res: any) => {
      this.listaUsuarios = res.data
    }
    );
  }
  obtenerPerfil() {
    this.usuariosService.obtenerPerfil().subscribe( (res: any) => {
      this.listaPerfiles = res.data
    }
    );
  }
  crearUsuario() {
    this.usuariosService.crearUsuario(this.usuarioFormulario.value).subscribe( (res: any) => {
      this.usuarioFormulario.reset();
    this.obtenerUsuario();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'GUARDO OK',
      text: res.message,
      showConfirmButton: false,
      timer: 3500
    })

  }, ( error ) => {
    console.log( error );
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'VERIFIQUE CONEXION: ',
      text: error.error.message,
      showConfirmButton: false,
      timer: 3500
    })
  })
}
}
