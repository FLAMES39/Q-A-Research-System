import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserSuccess, Loggedusers, Newusers } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }

  registerStudent(newUser:Newusers):Observable<AddUserSuccess>{
    return this.http.post<AddUserSuccess>('',newUser)
  }
  loginUser(loggedStudent:Loggedusers):Observable<AddUserSuccess>{
    return this.http.post<AddUserSuccess>('',loggedStudent)
  }
}
