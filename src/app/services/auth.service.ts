import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { loggedUserSuccess } from '../interfaces';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  @Inject(PLATFORM_ID) private platformId: Object) { 

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
  isLoggeIn(){
    let role= localStorage.getItem('role')
    this.role= role? role:null
    let token= localStorage.getItem('token')
    this.token=token?token:null
    return this.token? true: false 

  }
  
}
