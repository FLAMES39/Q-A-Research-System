import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { iCourses, iDepartments } from "../../interfaces";
import * as courseActions from '../Actions/coursesActions'

export interface  coursesInterface{
    courses:iCourses[]
    GetDepartmentsSuccess:iDepartments[] | null
    courseError:string
    AddCoursesSuccess:string
    AddCoursesFailure:string
    Propertyid:number
    GetCoursesByIdSuccess:iCourses | null
    GetCoursesByIdFailure:string
    GetDepartmentsFailure:string
    
}



const initialState:coursesInterface={
    courses: [],
    courseError: "",
    AddCoursesSuccess: "",
    AddCoursesFailure: "",
    Propertyid: 0,
    GetCoursesByIdSuccess: null,
    GetCoursesByIdFailure: "",
    GetDepartmentsSuccess: null,
    GetDepartmentsFailure: ""
}



const getCourseState = createFeatureSelector<coursesInterface>('courses')
export const getCourses = createSelector(getCourseState,(state)=>state.courses) 
export const getCourseById = createSelector(getCourseState,(state)=>state.Propertyid)
export const getCourseFailure =createSelector(getCourseState,(state)=>state.courseError)
export const getSingleCourse = createSelector(getCourseState,(state) =>state.GetCoursesByIdSuccess)

const AddCourseState = createFeatureSelector<coursesInterface>('addCourse')
export  const AddCourseSuccess = createSelector(AddCourseState,(state)=>state.AddCoursesSuccess)
export const AddCoursesFailure = createSelector(AddCourseState,(state)=>state.AddCoursesFailure)

const  getCourseSuccessByIdState = createFeatureSelector<coursesInterface>('property')
export const getCourseSuccessById = createSelector(getCourseSuccessByIdState, (state) => state.courses)
export const getCourseFailureById = createSelector(getCourseSuccessByIdState, (state) => state.courseError)



export const coursesReducers =createReducer(
    initialState,
    on(courseActions.GetCoursesSuccess,(state,action):coursesInterface=>{
        return{
            ...state,
            courseError:'',
            courses:action.Courses
        }
    }),
    on(courseActions.GetCoursesFailure,(state,action):coursesInterface=>{
        return{
            ...state,
            courseError:action.message,
            courses:[]       
        }
    }),
    on(courseActions.AddCoursesSuccess,(state,action):coursesInterface=>{
        return{
            ...state,
            AddCoursesSuccess:action.message ,
            AddCoursesFailure:''
        }
    }),
    on(courseActions.AddCoursesFailure,(state,action):coursesInterface=>{
        return{
            ...state,
            AddCoursesFailure:action.message ,
            AddCoursesSuccess:''
        }
    }),
    on(courseActions.GetCoursesById,(state,action):coursesInterface=>{
        return{
            ...state,
            Propertyid:action.courseID
        }
    }),
    on(courseActions.GetCoursesByIdSuccess,(state,action):coursesInterface=>{
        return{
            ...state,
            GetCoursesByIdSuccess:action.Courses,
            GetCoursesByIdFailure:''
        }
    }),
    on(courseActions.GetDepartmentsSuccess,(state,action):coursesInterface=>{
        return{
            ...state,
            GetDepartmentsSuccess:action.Departments,
            GetDepartmentsFailure:''
        }
    }),
    on(courseActions.GetDepartmentsFailure,(state,action):coursesInterface=>{
        return{
            ...state,
            GetDepartmentsFailure:action.message,
            GetDepartmentsSuccess: null
        }
    })

)
