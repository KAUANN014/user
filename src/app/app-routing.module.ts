import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'list-user', loadChildren: () => import('./user/user.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
