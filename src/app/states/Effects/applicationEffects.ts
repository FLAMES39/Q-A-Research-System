
import { Injectable } from "@angular/core";
import { JobsService } from "../../services/jobs.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ApplicationAction from "../Actions/JobActions"
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { error } from "console";



@Injectable()



export class applicationEffects {

    constructor(private jobservice:JobsService , private action$:Actions){

    }

 
    withApplication$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(ApplicationAction.WithdrawApplication),
            mergeMap( action =>{
                return this.jobservice.withdrawApplication(action.ApplicationID).pipe(
                    map( msg => {
                        return ApplicationAction.WithdrawApplicationSuccess({message:msg.message})
                    }),
                    catchError( error => of(ApplicationAction.WithdrawApplicationFailure({message:error})))
                )
            })
        )
    })
 
    getApplication$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(ApplicationAction.GetAllApplications),
            mergeMap( action =>{
                return this.jobservice.getApplications().pipe(
                    map( applications => {
                        return ApplicationAction.GetAllApplicationsSuccess({ applications})
                    }),
                    catchError(error => of(ApplicationAction.GetAllApplicationsFailure({message:error})))
                )
            })
        )
    })

}