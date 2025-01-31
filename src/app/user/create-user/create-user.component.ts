import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  useForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.useForm = this.fb.group({
      nome: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      senha: ['',Validators.required],
      confirmPassword:['',Validators.required],
    })
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
}
