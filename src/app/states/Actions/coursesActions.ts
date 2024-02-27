import { createAction, props } from "@ngrx/store";
import { iCourses, iDepartments } from "../../interfaces";




export const Getcourses = createAction('[courses]-getCourses')
export const GetCoursesSuccess = createAction('[courses]-getCourseSuccess',props<{Courses:iCourses[]}>())
export const GetCoursesFailure = createAction('[courses]-getCourseFailure',props<{message:string}>())


export const GetSingleCoursesById=createAction('[GetCoursestyById]-GetPropertyById',props<{CoursesID:number}>())
export const GetCoursesByIdSuccess=createAction('[GetCoursesByIdSuccess]-GetPropertyByIdSuccess',props<{Courses:iCourses}>())
export const GetCoursesByIdFailure=createAction('[GetCoursesByIdFailure]-GetPropertyByIdFailure',props<{message:string}>())


export const addCourses=createAction('[addCourses]-addCourses',props<{newCourses:iCourses}>())
export const AddCoursesSuccess=createAction('[AddCoursesSuccess]-AddCoursesSuccess',props<{message:string}>())
export const AddCoursesFailure=createAction('[AddCoursesFailure]-CoursesFailure',props<{message:string}>())


export const GetCoursesById=createAction('[GetPropertyById]-GetPropertyById',props<{courseID:number}>())


export const GetDepartments = createAction('[Departments]-getCourses')
export const GetDepartmentsSuccess = createAction('[Departments]-GetDepartmentsSuccess',props<{Departments:iDepartments[]}>())
export const GetDepartmentsFailure = createAction('[Departments]-GetDepartmentsFailure',props<{message:string}>())
