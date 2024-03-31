import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import  * as JobAction from  '../../states/Actions/JobActions' 
import { iApplication, jobs } from "../../interfaces";
import { state } from "@angular/animations";

export interface ApplicationInterface{
   
    GetApplicationID:number
    applyJobSuccess:string
    applyJobFailure:string
    WithdrawApplicationSuccess:string
    WithdrawApplicationFailure:string
    applications:iApplication[]
    GetAllApplicationsFailure:string
    
}

const initialState:ApplicationInterface ={
    applyJobFailure: "",
    applyJobSuccess: "",
    WithdrawApplicationSuccess: "",
    WithdrawApplicationFailure: "",
    GetAllApplicationsFailure: "",
    applications: [],
    GetApplicationID: 0
}
    


const getApplicationState = createFeatureSelector<ApplicationInterface>('applications')
export const GetAllApplication = createSelector(getApplicationState, (state)=>state.applications)



export const applicationsReducers = createReducer( 
    initialState,
   
    on(JobAction.WithdrawApplicationSuccess ,(state, action):ApplicationInterface=>{
        return {
            ...state,
            WithdrawApplicationSuccess: action.message,
            WithdrawApplicationFailure: ''

        }
    }),
    on(JobAction.WithdrawApplicationFailure,(state, action):ApplicationInterface=>{
        return {
            ...state,
            WithdrawApplicationFailure: action.message,
            WithdrawApplicationSuccess: ''
,
        }
    }),
    on(JobAction.GetAllApplicationsSuccess,(state, action):ApplicationInterface=>{
        return {
            ...state,
            applications: action.applications,
            GetAllApplicationsFailure:''
        }
    }),
    on(JobAction.GetAllApplicationsFailure,(state, action):ApplicationInterface=>{
        return {
            ...state,
            GetAllApplicationsFailure: action.message,
            applications:[]
        }
    }),
    on(JobAction.GetApplicationId ,(state, action):ApplicationInterface=>{
        return {
            ...state,
            GetApplicationID:action.ApplicationID

        }
    }),
)