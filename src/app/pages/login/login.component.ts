import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursoVidaService } from 'src/app/services/curso-vida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormulario: FormGroup = null;




  constructor( private fb: FormBuilder, private cursoVidaService: CursoVidaService, private router:Router  ) { }


  ngOnInit(): void {
    this.loginFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required]]
    });

  }
  validarCampo(campo: string): boolean {
    if (this.loginFormulario.get(campo).invalid) {
      return true;
    }else{
      return false;
    }
  }
  login(){
    this.cursoVidaService.login( this.loginFormulario.value ).subscribe( ( res: any ) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('id_perfil', JSON.stringify( res.usuarioLogeado.id_perfil));
      localStorage.setItem('id_usuario', JSON.stringify( res.usuarioLogeado.id));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'BIENVENIDA(O): ',
        text: res.message,
        showConfirmButton: false,
        timer: 3500
      })
      this.router.navigateByUrl('/dashboard')
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
