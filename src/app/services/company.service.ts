import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCourses, addedSuccessfull, iCompanies, companyAddedSuccess, companyLoggedSuccess } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  addCompany(newCompany:iCompanies):Observable<companyAddedSuccess>{
    return this.http.post<companyAddedSuccess>('http://localhost:4000/companies',newCompany)
  }


  loggedCompany(loggedCompany:iCompanies):Observable<companyLoggedSuccess>{
    return this.http.post<companyLoggedSuccess>('http://localhost:4000/companies/login', loggedCompany)
  }


  getCompanyByID(CompanyID:number):Observable<iCompanies>{
    return this.http.get<iCompanies>(``)
  }


  getCompaany():Observable<iCompanies[]>{
    return this.http.get<iCompanies[]>('http://localhost:4000/companies')
  }

}
