import { User } from './../app/core/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{ data: User[] }> {
    return this.http.get<{ data: User[] }>(this.baseUrl)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  reloadUsers(): void {
    this.getUsers().subscribe(response => {
      this.usersSubject.next(response.data)
    })
  }

  updateUsersList(users: User[]): void {
    this.usersSubject.next(users);
  }
  addUserToList(user: User): void {
    const currentUsers = this.usersSubject.getValue();

    const updatedUsers = [...currentUsers, user];

    this.usersSubject.next(updatedUsers);
  }

}
