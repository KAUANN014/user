import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroments';

interface User{
id : number;
email: string;
first_name: string;
last_name: string;
avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
   apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers():Observable<{data:User[]}>{
    return this.http.get<{data:User[]}>(this.apiUrl)
  }
}
