import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserSuccess, Loggedusers, Newusers, iusers, loggedUserSuccess, userDeletedSuccess } from '../interfaces';

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
  deleteUser(UserID:number):Observable<userDeletedSuccess>{
    return this.http.delete<userDeletedSuccess>(`http://localhost:4000/admin/delete/${UserID}`)
  }
  getUsers():Observable<iusers[]>{
    return this.http.get<iusers[]>('http://localhost:4000/user')
  }
}
