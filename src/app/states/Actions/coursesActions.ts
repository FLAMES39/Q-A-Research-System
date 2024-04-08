import { createAction, props } from "@ngrx/store";
import { iCompanies, iCourses, iDepartments } from "../../interfaces";




export const GetCompany = createAction('[Company]-getCompany')
export const GetCompanySuccess = createAction('[Company]-getCompanyuccess',props<{company:iCompanies[]}>())
export const GetCompanyFailure = createAction('[Company]-getCourseFailure',props<{message:string}>())


export const GetSingleCompanyById=createAction('[GetCompanytyById]-GetPropertyById',props<{CompanyID:number}>())
export const GetCompanyByIdSuccess=createAction('[GetCompanyByIdSuccess]-GetPropertyByIdSuccess',props<{Company:iCompanies}>())
export const GetCompanyByIdFailure=createAction('[GetCompanyByIdFailure]-GetPropertyByIdFailure',props<{message:string}>())


export const addCompany=createAction('[addCompany]-addCompany',props<{newCompany:iCompanies}>())
export const AddCompanySuccess=createAction('[AddCompanySuccess]-AddCompanySuccess',props<{message:string}>())
export const AddCompanyFailure=createAction('[AddCompanyFailure]-CompanyFailure',props<{message:string}>())


export const LoggedCompany=createAction('[LoggedCompany]-LoggedCompany',props<{loggedCompany:iCompanies}>())
export const LoggedCompanySuccess=createAction('[LoggedCompanySuccess]-LoggedCompanySuccess',props<{message:string}>())
export const LoggedCompanyFailure=createAction('[LoggedCompanyFailure]-CompanyFailure',props<{message:string}>())

export const GetCompanyById=createAction('[GetcompanyById]-GetcompanyById',props<{companyID:number}>())


export const GetDepartments = createAction('[Departments]-getCompany')
export const GetDepartmentsSuccess = createAction('[Departments]-GetDepartmentsSuccess',props<{Departments:iDepartments[]}>())
export const GetDepartmentsFailure = createAction('[Departments]-GetDepartmentsFailure',props<{message:string}>())


export const DeleteCompany=createAction('[DeleteCompany]-DeleteCompany',props<{companyID:number}>())
export const DeleteCompanySuccess=createAction('[DeleteCompanySuccess]-DeleteCompanySuccess',props<{message:string}>())
export const DeleteCompanyFailure=createAction('[DeleteCompanyFailure]-DeleteCompanyFailure',props<{message:string}>())