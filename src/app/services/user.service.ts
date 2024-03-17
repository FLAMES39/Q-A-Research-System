import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserSuccess, Loggedusers, Newusers, iusers, loggedUserSuccess } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }

  registerStudent(newUser:Newusers):Observable<AddUserSuccess>{
    return this.http.post<AddUserSuccess>('http://localhost:4000/user',newUser)
   
  }
  
  
  loginUser(loggedUser:Loggedusers):Observable<loggedUserSuccess>{
    return this.http.post<loggedUserSuccess>('http://localhost:4000/user/login',loggedUser)
  }

  getUserByID(UserID:number):Observable<iusers>{
    return this.http.get<iusers>(`http://localhost:4000/user/${UserID}`)
  }
}
