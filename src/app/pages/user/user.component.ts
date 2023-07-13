import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from './../../services/usuarios.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})

export class UserComponent implements OnInit {
  @ViewChild('addEmployeeModal') modalElement: ElementRef;
  public listaUsuarios: any = [];
  public usuarioFormulario: FormGroup = null;
  public usuarioFormularioActualizar: FormGroup = null;
  public listaPerfiles: any = [];
  public id_usuario: number;
  constructor(private usuariosService: UsuariosService, private fb: FormBuilder, private modalService: NgbModal) {}

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
    this.usuarioFormularioActualizar = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      id_perfil: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.min(7)]],
      id: ['',]
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
obtenerDatos(table: any, basicModal: any) {
  this.modalService.open(basicModal);
 /* console.log(this.usuarioFormulario.controls['nombres'].setValue(table.nombres));
 console.log(table.nombres, this.usuarioFormulario.value); */
 this.usuarioFormularioActualizar.controls['email'].setValue(table.email);
 this.usuarioFormularioActualizar.controls['nombres'].setValue(table.nombres);
 this.usuarioFormularioActualizar.controls['apellidos'].setValue(table.apellidos);
 this.usuarioFormularioActualizar.controls['id_perfil'].setValue(table.id_perfil);
 this.usuarioFormularioActualizar.controls['cedula'].setValue(table.cedula);
 this.usuarioFormularioActualizar.controls['id'].setValue(table.id);


 this.id_usuario = this.usuarioFormularioActualizar.get('id').value;



}
actualizarUsuario() {
  console.log(this.id_usuario);


  this.usuariosService.actualizarUsuario(this.usuarioFormularioActualizar.value, this.id_usuario).subscribe( (res: any) => {
  console.log(res);

  this.obtenerUsuario();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'ACTUALIZADO OK',
    text: res.msg,
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
