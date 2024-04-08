import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesService } from "../../services/courses.service";
import * as courseAction from "../Actions/coursesActions"
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { CompanyService } from "../../services/company.service";
import { AuthService } from "../../services/auth.service";
import { error } from "console";
import { Router } from "@angular/router";




@Injectable()

export class courseEffects {
    constructor( private action$:Actions, private companyservice:CompanyService, private authservice:AuthService,private router: Router){}

    getCourses$ = createEffect( () => {
        return this.action$.pipe(
            ofType(courseAction.GetCompany),
            mergeMap( action =>{
                return this.companyservice.getCompaany().pipe(
                    //success
                    map(company=>{
                        return courseAction.GetCompanySuccess({ company })
                    }),
                    catchError(error => of(courseAction.GetCompanyFailure({message: error})))
                )
            })
        )
    })

    addCompany$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(courseAction.addCompany),
            mergeMap(action =>{
                return this.companyservice.addCompany(action.newCompany).pipe(
                    map( msg => courseAction.AddCompanySuccess({message:msg.message})
                    ),
                    catchError(error => of(courseAction.AddCompanyFailure({ message: error })))
                )
            }),
            //refreshing behaviour after adding a property house
            switchMap(() => [courseAction.GetCompany()])
            
        )
    })

    deletCompany$= createEffect(()=>{
        return this.action$.pipe(
            ofType(courseAction.DeleteCompany),
            mergeMap(action=>{
                return this.companyservice.deleteCompany(action.companyID).pipe(
                    map( msg => courseAction.DeleteCompanySuccess({message:msg.message})),
                    catchError(error => of(courseAction.DeleteCompanyFailure({message:error})))
                )
            })
        )
    })
    loggedCompany$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(courseAction.LoggedCompany),
            mergeMap( action =>{
                return this.companyservice.loggedCompany(action.loggedCompany).pipe(
                    tap(res => {
                        this.authservice.CompanyloggedIn(res),
                        this.router.navigate(['/dashboard'])
                    }),
                    
                    map(msg => courseAction.LoggedCompanySuccess({
                        message: ""
                    })),
                    catchError(error=> of(courseAction.LoggedCompanyFailure({message:error})))
                )
            })
        )
    })


    getCompanyByID$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(courseAction.GetCompanyById),
            mergeMap( action =>{
                return this.companyservice.getCompanyByID(action.companyID).pipe(
                    map(Company => {
                        return courseAction.GetCompanyByIdSuccess({Company})
                    }),
                    catchError(error=> of(courseAction.GetCompanyByIdFailure({message:error})))
                )
            })
        )
    })




}