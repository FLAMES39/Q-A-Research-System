import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loggedUserSuccess } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { 

  }
  role!:string | null
  token!:string | null 
  Name!:string
  logOut(){
    localStorage.clear()
  }
  isLoggedIn(){
    let role = localStorage.getItem('role')
    this.role = role? role:null
    let token = localStorage.getItem('token')
    this.token = token? token: null
    return this.token? true: false
  }
  loggedIn(res:loggedUserSuccess){
    localStorage.setItem('role', res.role)
    localStorage.setItem('token', res.token)
    localStorage.setItem('Name', res.Name)
  }
  getUserName(){
    let Name = localStorage.getItem('Name')
    return this.Name = Name? Name:'Welcome Student'
  }

}
