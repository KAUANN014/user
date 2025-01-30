import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroments';
import { User } from '../app/core/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
   baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers():Observable<{data:User[]}>{
    return this.http.get<{data:User[]}>(this.baseUrl)
  }

  teste() {
    
  }
}
