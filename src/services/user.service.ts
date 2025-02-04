import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/enviroments';
import { User } from '../app/core/user.model';
import {tap} from 'rxjs/operators'

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

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user).pipe(
      tap(() => this.reloadUsers())
    );
  }

  reloadUsers(): void {
    this.getUsers().subscribe(response => {
      this.usersSubject.next(response.data)
    })
  }
}
