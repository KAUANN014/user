import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';

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
export class ListUserComponent implements OnInit {
users: User [] = [];
isLoading: boolean = true;  
errorMessage: string = '';
displayedColumns: string[] = ['avatar', 'name', 'email']
dataSource!: MatTableDataSource<User> 

@ViewChild(MatPaginator) paginator!: MatPaginator;

constructor (private userService: UserService){}

ngOnInit(){
  this.userService.getUsers().subscribe(
    response =>{
      this.users = response.data;
      this.isLoading = false;

      this.dataSource = new MatTableDataSource(this.users);

      this.dataSource.paginator = this.paginator;
    },
    error => {
      this.errorMessage = 'Erro ao carregar usuários'
    }
  )
}

}
