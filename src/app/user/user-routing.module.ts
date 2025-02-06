import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeUserComponent,
    children: [
      { path: '', component: ListUserComponent },
      { path: 'create', component: CreateUserComponent },

    ]},
  {path: '', redirectTo: '/home-user', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
