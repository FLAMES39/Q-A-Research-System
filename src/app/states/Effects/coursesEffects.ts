import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesService } from "../../services/courses.service";
import * as courseAction from "../Actions/coursesActions"
import { catchError, map, mergeMap, of, switchMap } from "rxjs";




@Injectable()

export class courseEffects {
    constructor( private action$:Actions, private courseservice:CoursesService){}

    getCourses$ = createEffect( () => {
        return this.action$.pipe(
            ofType(courseAction.Getcourses),
            mergeMap( action =>{
                return this.courseservice.getCourses().pipe(
                    //success
                    map(Courses=>{
                        return courseAction.GetCoursesSuccess({ Courses })
                    }),
                    catchError(error => of(courseAction.GetCoursesFailure({message: error})))
                )
            })
        )
    })

    addCoures$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(courseAction.addCourses),
            mergeMap(action =>{
                return this.courseservice.addCourses(action.newCourses).pipe(
                    map( msg => courseAction.AddCoursesSuccess({message:msg.message})
                    ),
                    catchError(error => of(courseAction.AddCoursesFailure({ message: error })))
                )
            }),
            //refreshing behaviour after adding a property house
            switchMap(() => [courseAction.Getcourses()])
            
        )
    })

    getCourseByID$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(courseAction.GetCoursesById),
            mergeMap( action =>{
                return this.courseservice.getCourseById(action.courseID).pipe(
                    map(Courses => {
                        return courseAction.GetCoursesByIdSuccess({Courses})
                    }),
                    catchError(error=> of(courseAction.GetCoursesByIdFailure({message:error})))
                )
            })
        )
    })




}