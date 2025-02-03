import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersModule } from '../user.module';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { 
      validator: this.passwordMatchValidator 
    });
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log('Usuário cadastrado: ', this.userForm.value)
    }else{
      console.log('Usuário inválido')
    }
  }
}
