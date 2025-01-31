import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'home', component: ListUserComponent},
  {path: 'novo-usuario', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
