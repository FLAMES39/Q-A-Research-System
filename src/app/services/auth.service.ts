import { INJECTOR, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { companyLoggedSuccess, loggedUserSuccess } from '../interfaces';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject (PLATFORM_ID ) private platiformId: object ) { 

  }
  role!:string | null
  token!:string | null 
  Name!:string | null
  UserID!:string 

  logOut(){
    if(isPlatformBrowser(this.platiformId)){
      localStorage.clear()
    }
  }

  loggedIn(res:loggedUserSuccess){
    if (isPlatformBrowser(this.platiformId)) {
      localStorage.setItem('role', res.role)
      localStorage.setItem('token', res.token)
      localStorage.setItem('Name', res.Name)
      localStorage.setItem('UserID', res.UserID)
      
    }
  }


  getUserID(){
    if (isPlatformBrowser(this.platiformId)) {
     const userID = localStorage.getItem('UserID')
     return userID
      
    }
    return;
  }
  
  CompanyloggedIn(res:companyLoggedSuccess){
    if (isPlatformBrowser(this.platiformId)) {
      localStorage.setItem('role', res.role)
      localStorage.setItem('token', res.token)
      localStorage.setItem('Name', res.Name)
      
    }
  }




  getUserName(){
    if(isPlatformBrowser(this.platiformId)){
      let Name = localStorage.getItem('Name')
      return this.Name = Name? Name:'Welcome Student'
    }else{
      this.Name = 'Welcome Student'
    }
    return this.Name
  }


  isLoggeIn(){
    if (isPlatformBrowser(this.platiformId)) {
      let role= localStorage.getItem('role')
      this.role= role? role:null
      let token= localStorage.getItem('token')
      this.token=token?token:null
      
    }else{
      this.role =null
      this.token =null
  }
    return !!this.token

  }

  isCompanyLoggeIn(){
    if (isPlatformBrowser(this.platiformId)) {
      let role= localStorage.getItem('role')
      this.role= role? role:null
      let token= localStorage.getItem('token')
      this.token=token?token:null
      
    }else{
      this.role =null
      this.token =null
  }
    return !!this.token

  }
  
  getRole(){
    let role = localStorage.getItem('role')
    return role==='Company'?true:false
  }
}
  


