import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

interface User{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-list-user',
  standalone: false,
  
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
users: User [] = [];
isLoading: boolean = true;  
errorMessage: string = ''

displayedColumns: string[] = ['avatar', 'name', 'email']

constructor (private userService: UserService){

  this.userService.getUsers().subscribe(
    response =>{
      this.users = response.data;
      this.isLoading = false;
    },
    error => {
      this.errorMessage = 'Erro ao carregar usuários'
    }
  )
}
}
