import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService){}

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['',Validators.required ],
      email: ['', []],
      password: ['', ],
      confirmPassword: ['', ]
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
        (next) => {
          this.toastr.success("Usuário cadastrado", "Sucesso");


      this.userService.addUserToList(user)

          this.router.navigate(['/home-user']);
        },
        (error) => {
          this.toastr.error("Usuário não cadastrado", "Erro");
        }
      );
    }
  }

}
