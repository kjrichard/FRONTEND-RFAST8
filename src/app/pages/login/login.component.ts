import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoVidaService } from 'src/app/services/curso-vida.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormulario: FormGroup = null;




  constructor( private fb: FormBuilder, private cursoVidaService: CursoVidaService  ) { }

 
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
      
    }, ( error ) => {
      console.log( error );
      
    })
    

  }

}
