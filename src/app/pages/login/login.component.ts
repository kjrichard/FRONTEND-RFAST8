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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    console.log( this.loginFormulario.value);
    this.cursoVidaService.login( this.loginFormulario.value ).subscribe( ( res: any ) => {
      console.log( res );
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
        title: 'VERIFIQUE: ',
        text: error.error.message,
        showConfirmButton: false,
        timer: 3500
      })
    })


  }

}
