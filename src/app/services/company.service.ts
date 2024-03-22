import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCourses, addedSuccessfull, iCompanies, companyAddedSuccess, companyLoggedSuccess } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  addCompany(newCourse:iCompanies):Observable<companyAddedSuccess>{
    return this.http.post<companyAddedSuccess>('',newCourse)
  }

  loggedCompany(loggedCourse:iCompanies):Observable<companyLoggedSuccess>{
    return this.http.post<companyLoggedSuccess>('',loggedCourse)
  }

}
