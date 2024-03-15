
import { Injectable } from "@angular/core";
import { JobsService } from "../../services/jobs.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as JobsAction from "../Actions/JobActions"
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { error } from "console";



@Injectable()



export class jobEffects {

    constructor(private jobservice:JobsService , private action$:Actions){

    }

    getJobs$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.Getjobs),
            mergeMap( action =>{
                return this.jobservice.getJobs().pipe(
                    map( job => {
                        return JobsAction.GetjobsSuccess({ job})
                    }),
                    catchError(error => of(JobsAction.GetjobsFailure({jobError:error})))
                )
            })
        )
    })
    addJobsPost$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.addJob),
            mergeMap( action =>{
                return this.jobservice.addJobs( action.newJob).pipe(
                    map( msg => JobsAction.AddJobSuccess({message:msg.message})),
                    catchError(error => of(JobsAction.AddJobFailure({message:error})))
                )
            })
        )
    })

    getJobById$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.GetJobById),
            mergeMap( action =>{
                return this.jobservice.getJobsById(action.JobID).pipe(
                    map( jobs =>{
                        return JobsAction.GetJobByIdSuccess( {jobs})
                    }),
                    catchError( error => of(JobsAction.GetJobByIdFailure({message:error})))
                )
            })
        )
    })
    applyJob$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.applyJob),
            mergeMap( action =>{
                return this.jobservice.applyJob( action.applyJob).pipe(
                    map( msg => JobsAction.applyJobSuccess({message:msg.message})),
                    catchError(error => of(JobsAction.applyJobFailure({message:error})))
                )
            })
        )
        })
    getJobByLocation$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.GetJobByLocation),
            mergeMap( action =>{
                return this.jobservice.getJobsByLocation(action.location).pipe(
                    map( jobs => {
                        return JobsAction.GetJobByLocationSuccess({jobs})
                    }),
                    catchError(error => of(JobsAction.GetJobByLocationFailure({message:error})))
                )
            })
        )
    })
    deleteJobPost$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType( JobsAction.updatedJobPost),
            mergeMap( action =>{
                return this.jobservice.DeleteJobPost(action.JobID).pipe(
                    map( msg => {return JobsAction.DeleteJobSuccess({message:msg.message})}),
                    catchError( error => of(JobsAction.DeleteJobFailure({message:error})))
                )
            })
        )
    })

    withApplication$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.WithdrawApplication),
            mergeMap( action =>{
                return this.jobservice.withdrawApplication(action.ApplicationID).pipe(
                    map( msg => {
                        return JobsAction.WithdrawApplicationSuccess({message:msg.message})
                    }),
                    catchError( error => of(JobsAction.WithdrawApplicationFailure({message:error})))
                )
            })
        )
    })
    updateJobPost$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(JobsAction.updatedJobPost),
            mergeMap( action =>{
                return this.jobservice.updateJobPost( action.JobID, action.updatedJPost).pipe(
                    map( msg =>{
                        return JobsAction.updatedJobPostSuccess({message:msg.message})
                    }),
                    catchError( error => of(JobsAction.updatedJobPostFailure({message:error})))
                )
            })
        )
    })

}