import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { iCompanies,  iDepartments } from "../../interfaces";
import * as courseActions from '../Actions/coursesActions'

export interface  companyInterface{
    company:iCompanies[]
    GetDepartmentsSuccess:iDepartments[] | null
    courseError:string
    AddCompanySuccess:string
    AddCompanyFailure:string
    loggedCompanySuccess:string
    loggedCompanyFailure: string
    companyID:number
    GetCompanyByIdSuccess:iCompanies | null
    GetCompanyByIdFailure:string
    GetDepartmentsFailure:string
    
}



const initialState:companyInterface={
    company: [],
    courseError: "",
    AddCompanySuccess: "",
    AddCompanyFailure: "",
    companyID: 0,
    GetCompanyByIdSuccess: null,
    GetCompanyByIdFailure: "",
    GetDepartmentsSuccess: null,
    GetDepartmentsFailure: "",
    loggedCompanySuccess: "",
    loggedCompanyFailure: ""
}



const getCompanytate = createFeatureSelector<companyInterface>('company')
export const getCompany = createSelector(getCompanytate,(state)=>state.company) 
export const getCourseById = createSelector(getCompanytate,(state)=>state.companyID)
export const getCourseFailure =createSelector(getCompanytate,(state)=>state.courseError)
export const getSingleCourse = createSelector(getCompanytate,(state) =>state.GetCompanyByIdSuccess)

const AddCompanytate = createFeatureSelector<companyInterface>('addCourse')
export  const AddCompanyuccess = createSelector(AddCompanytate,(state)=>state.AddCompanySuccess)
export const AddCompanyFailure = createSelector(AddCompanytate,(state)=>state.AddCompanyFailure)

const LoginCompanytate = createFeatureSelector<companyInterface>('LoginCourse')
export  const LoginCompanyuccess = createSelector(LoginCompanytate,(state)=>state.loggedCompanySuccess)
export const LoginCompanyFailure = createSelector(LoginCompanytate,(state)=>state.loggedCompanyFailure)

const  getCompanyuccessByIdState = createFeatureSelector<companyInterface>('company')
export const getCompanyuccessById = createSelector(getCompanyuccessByIdState, (state) => state.company)
export const getCourseFailureById = createSelector(getCompanyuccessByIdState, (state) => state.courseError)



export const CompanyReducers =createReducer(
    initialState,
    on(courseActions.GetCompanySuccess,(state,action):companyInterface=>{
        return{
            ...state,
            courseError:'',
            company:action.company
        }
    }),
    on(courseActions.GetCompanyFailure,(state,action):companyInterface=>{
        return{
            ...state,
            courseError:action.message,
            company:[]       
        }
    }),
    on(courseActions.LoggedCompanySuccess,(state,action):companyInterface=>{
        return{
            ...state,
            loggedCompanySuccess:action.message,
            loggedCompanyFailure:'',
           
        }
    }),
    on(courseActions.LoggedCompanyFailure,(state,action):companyInterface=>{
        return{
            ...state,
            loggedCompanyFailure:action.message,
            loggedCompanySuccess:''       
        }
    }),
    on(courseActions.AddCompanySuccess,(state,action):companyInterface=>{
        return{
            ...state,
            AddCompanySuccess:action.message ,
            AddCompanyFailure:''
        }
    }),
    on(courseActions.AddCompanyFailure,(state,action):companyInterface=>{
        return{
            ...state,
            AddCompanyFailure:action.message ,
            AddCompanySuccess:''
        }
    }),
    on(courseActions.GetCompanyById,(state,action):companyInterface=>{
        return{
            ...state,
            companyID:action.companyID
        }
    }),
    on(courseActions.GetCompanyByIdSuccess,(state,action):companyInterface=>{
        return{
            ...state,
            GetCompanyByIdSuccess:action.Company,
            GetCompanyByIdFailure:''
        }
    }),
    on(courseActions.GetDepartmentsSuccess,(state,action):companyInterface=>{
        return{
            ...state,
            GetDepartmentsSuccess:action.Departments,
            GetDepartmentsFailure:''
        }
    }),
    on(courseActions.GetDepartmentsFailure,(state,action):companyInterface=>{
        return{
            ...state,
            GetDepartmentsFailure:action.message,
            GetDepartmentsSuccess: null
        }
    })

)
