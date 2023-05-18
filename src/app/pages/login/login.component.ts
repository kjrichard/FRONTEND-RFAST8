import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormulario: FormGroup = null;




  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.loginFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    console.log( this.loginFormulario.value);

  }

}
