import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoadUserComponent } from './load-user/load-user.component';
import { GetUserByIDComponent } from './get-user-by-id/get-user-by-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from '../layout/footer/footer.component';
import {ToastrModule} from 'ngx-toastr'



@NgModule({
  declarations: [
    CreateUserComponent,
    DeleteUserComponent,
    LoadUserComponent,
    GetUserByIDComponent,
    HeaderComponent,
    ListUserComponent,
    CreateUserComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatToolbar,
    UserRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
    
   
  ]
})
export class UsersModule { }
