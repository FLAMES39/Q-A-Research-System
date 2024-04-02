import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor() { }

isAuthenticate():boolean{
  if (localStorage.getItem('role')) {
    return true
    
  }else{
    return false
  }
}
isAdmin():boolean{
  let isAdmin = localStorage.getItem('role')
  if(isAdmin === '1'){
    return true
  }else{
    return false
  }
}

}
