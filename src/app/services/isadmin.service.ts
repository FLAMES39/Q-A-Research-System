import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsadminService implements CanActivate {

  constructor(private router:Router) { }

  
  canActivate(): boolean  {
    if (localStorage.getItem('role')) {
      this.router.navigate(['/admin'])
      return  true
    }
    this.router.navigate(['/login'])
    return false
  }
  

  
}
