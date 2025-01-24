import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoadUserComponent } from './load-user/load-user.component';
import { GetUserByIDComponent } from './get-user-by-id/get-user-by-id.component';



@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    DeleteUserComponent,
    LoadUserComponent,
    GetUserByIDComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
