import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';


import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListUserComponent } from './user/list-user/list-user.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'
import { MatCard } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule, 
    MatTableModule,
    MatPaginator,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCard,
    FormsModule
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
