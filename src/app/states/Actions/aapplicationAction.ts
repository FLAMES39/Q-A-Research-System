import { createAction, props } from "@ngrx/store"
import { iApplication } from "../../interfaces"




export const GetAllApplications=createAction('[GetAllApplications]-GetAllApplications')
export const GetAllApplicationsSuccess=createAction('[GetAllApplicationsSuccess]-GetAllApplicationsSuccess',props<{applications:iApplication[]}>())
export const GetAllApplicationsFailure=createAction('[GetAllApplicationsFailure]-GetAllApplicationsFailure',props<{message:string}>())
