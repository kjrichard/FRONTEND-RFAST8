import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public listaPermisos: any = [];
  public usuarioFormulario: FormGroup = null;
  public usuarioFormularioActualizar: FormGroup = null;
  public listaPerfiles: any = [];
  public permisosSeleccionados: number[] = [];
  public id_usuario: number;
  public permisos = [];
  constructor(private usuariosService: UsuariosService, private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
    this.obtenerUsuario();
    this.obtenerPerfil();

    this.usuarioFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      id_perfil: ['', [Validators.required]],
      permisos: [[], [Validators.required]],
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

    this.obtenerPermisos();
  }

  selectedValues: number[] = [];

  onSelectMultiple(select: HTMLSelectElement) {
    const selectedOptions = Array.from(select.selectedOptions);
    this.selectedValues = selectedOptions.map(option => Number(option.value));
    console.log(this.selectedValues);
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

  obtenerPermisos() {
    this.usuariosService.obtenerPermisos().subscribe( (res: any) => {
      this.listaPermisos = res.data
    }
    );
  }

  opcionControl(id: number) {
    this.permisos.push(id);
    this.usuarioFormulario.controls.permisos.setValue(this.permisos);
  }

  crearUsuario() {
    const formularioValues = this.usuarioFormulario.value;

    // Ahora puedes enviar los valores a tu backend u otra lógica de procesamiento
    console.log(formularioValues);


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

  this.usuarioFormularioActualizar.controls['email'].setValue(table.email);
  this.usuarioFormularioActualizar.controls['nombres'].setValue(table.nombres);
  this.usuarioFormularioActualizar.controls['apellidos'].setValue(table.apellidos);
  this.usuarioFormularioActualizar.controls['id_perfil'].setValue(table.id_perfil);
  this.usuarioFormularioActualizar.controls['cedula'].setValue(table.cedula);
  this.usuarioFormularioActualizar.controls['id'].setValue(table.id);


  this.id_usuario = this.usuarioFormularioActualizar.get('id').value;
  }

  actualizarUsuario() {
  this.usuariosService.actualizarUsuario(this.usuarioFormularioActualizar.value, this.id_usuario).subscribe( (res: any) => {
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

  toggleEstado(usuario: any) {
    let estado: boolean;
    if (usuario.estado === null || usuario.estado === false) {
      estado = true;
    } else{
      estado = false;
    }
    this.usuariosService.actualizarUsuario({estado}, usuario.id).subscribe((res: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Estado actualizado',
        text: res.msg,
        showConfirmButton: false,
        timer: 3500
      });
      this.obtenerUsuario();
    }, (error) => {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error al actualizar el estado',
        text: error.error.message,
        showConfirmButton: false,
        timer: 3500
      });
    });
  }



}
