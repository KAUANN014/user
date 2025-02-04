import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersModule } from '../user.module';
import { ToastrService } from 'ngx-toastr'; 
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private userService: UserService, private router: Router){}

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

  onSubmit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
  
      this.userService.createUser(user).subscribe(
        (response) => {
          this.toastr.success('Usuário criado com sucesso');
          this.router.navigate(['/list-users']);
        },
        (error) => {
          this.toastr.error('Ocorreu um erro ao criar o usuário. Tente novamente');
        }
      );
    } else{
      this.toastr.error('Por favor, preencha todos os campos corretamente')
    }
  }  
 
}