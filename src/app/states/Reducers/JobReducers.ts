import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import  * as JobAction from  '../../states/Actions/JobActions' 
import { jobs } from "../../interfaces";

export interface jobsInterface{
    jobs:jobs[]
    JobError:string
    GetjobsFailure:string
    GetJobID:number
    GetJobByIdSuccess: jobs | null
    GetJobByIdFailure:string
    AddJobSuccess:string
    AddJobFailure:string
    applyJobSuccess:string
    applyJobFailure:string
    GetJobByLocationSuccess: jobs | null
    GetJobByLocationFailure:string
    WithdrawApplicationSuccess:string
    WithdrawApplicationFailure:string
    DeleteJobSuccess:string
    DeleteJobFailure:string
    updatedJobPostSuccess:string
    updatedJobPostFailure:string
    
}

const initialState:jobsInterface ={
    jobs: [],
    GetjobsFailure: "",
    GetJobByIdSuccess: null,
    GetJobByIdFailure: "",
    AddJobSuccess: "",
    AddJobFailure: '',
    applyJobFailure: "",
    applyJobSuccess: "",
    JobError: "",
    GetJobID: 0,
    GetJobByLocationSuccess: null,
    GetJobByLocationFailure: "",
    WithdrawApplicationSuccess: "",
    WithdrawApplicationFailure: "",
    DeleteJobSuccess: "",
    DeleteJobFailure: "",
    updatedJobPostSuccess: "",
    updatedJobPostFailure: ""
}
    

const getJobState = createFeatureSelector<jobsInterface>('jobs')
export const getAllJobs =createSelector(getJobState,(state) =>state.jobs)
export const getJobByID = createSelector(getJobState,(state)=>state.GetJobID)



export const jobReducers = createReducer( 
    initialState,
    on(JobAction.GetjobsSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            jobs:action.job,
            JobError:''
        }
    }),
    on(JobAction.GetjobsFailure ,(state, action):jobsInterface=>{
        return {
            ...state,
            JobError:action.message,
            jobs:[] 

        }
    }),
    on(JobAction.GetJobById ,(state, action):jobsInterface=>{
        return {
            ...state,
            GetJobID:action.JobID

        }
    }),
    on(JobAction.GetJobByIdSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            GetJobByIdSuccess:action.jobs,
            GetJobByIdFailure: ''

        }
    }),
    on(JobAction.GetJobByIdFailure ,(state, action):jobsInterface=>{
        return {
            ...state,
            GetJobByIdFailure:action.message,
            GetJobByIdSuccess: null

        }
    }),
    on(JobAction.AddJobSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            AddJobSuccess:action.message,
            GetJobByIdFailure: ''

        }
    }),
    on(JobAction.AddJobFailure ,(state, action):jobsInterface=>{
        return {
            ...state,
            AddJobFailure:action.message,
            AddJobSuccess: ''

        }
    }),
    on(JobAction.applyJobSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            applyJobSuccess:action.message,
            applyJobFailure: ''

        }
    }),
    on(JobAction.applyJobFailure ,(state, action):jobsInterface=>{
        return {
            ...state,
            applyJobFailure:action.message,
            applyJobSuccess: ''

        }
    }),
    on(JobAction.GetJobByLocationSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            GetJobByLocationSuccess:action.jobs,
            applyJobSuccess: ''

        }
    }),
    on(JobAction.GetJobByLocationFailure ,(state, action):jobsInterface=>{
        return {
            ...state,
            GetJobByLocationFailure: action.message,
            GetJobByLocationSuccess: null

        }
    }),
    on(JobAction.WithdrawApplicationSuccess ,(state, action):jobsInterface=>{
        return {
            ...state,
            WithdrawApplicationSuccess: action.message,
            GetJobByLocationSuccess: null

        }
    }),
    on(JobAction.WithdrawApplicationFailure,(state, action):jobsInterface=>{
        return {
            ...state,
            WithdrawApplicationFailure: action.message,
            WithdrawApplicationSuccess: ''
,
        }
    }),
    on(JobAction.DeleteJobSuccess,(state, action):jobsInterface=>{
        return {
            ...state,
            DeleteJobSuccess: action.message,
            DeleteJobFailure: ''
,
        }
    }),
    on(JobAction.DeleteJobFailure,(state, action):jobsInterface=>{
        return {
            ...state,
            DeleteJobFailure: action.message,
            DeleteJobSuccess: ''
,
        }
    }),
    on(JobAction.updatedJobPostSuccess,(state, action):jobsInterface=>{
        return {
            ...state,
            updatedJobPostSuccess: action.message,
           updatedJobPostFailure:''
        }
    }),
    on(JobAction.updatedJobPostFailure,(state, action):jobsInterface=>{
        return {
            ...state,
            updatedJobPostFailure: action.message,
            updatedJobPostSuccess:''
        }
    }),
)