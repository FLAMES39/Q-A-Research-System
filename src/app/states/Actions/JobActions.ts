import { createAction, props } from "@ngrx/store"
import { ijobs, jobs, newJobPost } from "../../interfaces"





export const Getjobs = createAction('[jobs]-getJobs')
export const GetjobsSuccess = createAction('[GetjobsFailure]-GetjobsSuccess',props<{Jobs:ijobs[]}>())
export const GetjobsFailure = createAction('[GetjobsFailure]-GetjobsFailure',props<{message:string}>())


export const GetSingleJobById=createAction('[GetjobstyById]-GetjobsById',props<{JobID:number}>())
export const GetJobByIdSuccess=createAction('[GetjobsByIdSuccess]-GetjobsByIdSuccess',props<{jobs:ijobs}>())
export const GetJobByIdFailure=createAction('[GetjobsByIdFailure]-GetjobsByIdFailure',props<{message:string}>())


export const updatedJobPost=createAction('[updatedJobPost]-GetjobsById',props<{JobID:number,updatedJPost:newJobPost}>())
export const updatedJobPostSuccess=createAction('[updatedJobPostSuccess]-GetjobsByIdSuccess',props<{message:string}>())
export const updatedJobPostFailure=createAction('[updatedJobPostFailure]-GetjobsByIdFailure',props<{message:string}>())



export const addJob=createAction('[addJob]-addJob',props<{newJob:ijobs}>())
export const AddJobSuccess=createAction('[addJobsSuccess]-addJobSuccess',props<{message:string}>())
export const AddJobFailure=createAction('[AddCoursesFailure]-addJobFailure',props<{message:string}>())

export const applyJob=createAction('[applyJob]-applyJob',props<{applyJob:ijobs}>())
export const applyJobSuccess=createAction('[applyJobSuccess]-applyJobSuccess',props<{message:string}>())
export const applyJobFailure=createAction('[applyJobFailure]-applyJobFailure',props<{message:string}>())


export const GetJobByLocation = createAction('[GetJobByLocation]-GetJobByLocation',props<{location:string}>())
export const GetJobByLocationSuccess=createAction('[GetJobByLocationSuccess]-GetJobByLocationSuccess',props<{jobs:ijobs}>())
export const GetJobByLocationFailure=createAction('[GetJobByLocationFailure]-GetJobByLocationFailure',props<{message:string}>())


export const DeleteJob=createAction('[DeleteJob]-DeleteJob',props<{JobID:number}>())
export const DeleteJobSuccess=createAction('[DeleteJobSuccess]-DeleteJobSuccess',props<{message:string}>())
export const DeleteJobFailure=createAction('[DeleteJobFailure]-DeleteJobFailure',props<{message:string}>())


export const WithdrawApplication=createAction('[WithdrawApplication]-WithdrawApplication',props<{ApplicationID:number}>())
export const WithdrawApplicationSuccess=createAction('[WithdrawApplicationSuccess]-WithdrawApplicationSuccess',props<{message:string}>())
export const WithdrawApplicationFailure=createAction('[WithdrawApplicationFailure]-WithdrawApplicationFailure',props<{message:string}>())




export const GetJobById=createAction('[GetJobById]-GetJobById',props<{JobID:number}>())