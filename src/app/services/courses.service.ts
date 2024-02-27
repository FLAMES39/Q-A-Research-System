import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addedSuccessfull, iCourses, iDepartments } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http:HttpClient) { }

  getCourses():Observable<iCourses[]>{
    return this.http.get<iCourses[]>('')
  }
  addCourses(newCourse:iCourses):Observable<addedSuccessfull>{
    return this.http.post<addedSuccessfull>('',newCourse)
  }

  getCourseById (courseID:number):Observable<iCourses>{
    return this.http.get<iCourses>(``)
  }
  getCourseCategory (category:string):Observable<iCourses>{
    return this.http.get<iCourses>(``)
  }
  getCourseBy (categofy:string):Observable<iCourses>{
    return this.http.get<iCourses>(``)
  }

  getDepartments():Observable<iDepartments[]>{
    return this.http.get<iDepartments[]>('')
  }



}
