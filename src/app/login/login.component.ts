import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formulario!: FormGroup;
  msg: string = "";

  constructor (private formbuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.formulario = this.formbuilder.group({
      email: ['', [ Validators.required, ]],
      senha: ['', [Validators.required,]]
    })
  }

  enviarForm(): void {
    this.msg = "";
    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      this.formulario.markAsDirty();
    } else {
      this.enviarDados();
    }
  }
  enviarDados() {
    const email = this.formulario.get('email')?.value;
    const senha = this.formulario.get('senha')?.value;
    if(email === '1' && senha === '1' ) {
      console.log(this.formulario.value);
      this.router.navigate(['home-user']);
    }else {
      this.msg = "Dados incorretos";
    }

  }

}
