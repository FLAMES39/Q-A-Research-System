import { createAction, props } from "@ngrx/store";
import { Loggedusers, Newusers, iusers } from "../../interfaces";






export const userRegistration = createAction('[useregister]-registration',props<{newUser:Newusers}>())
export const userRegistrationSuccess = createAction('[userRegister]-registrationSuccess',props<{message:string}>())
export const userRegistrationFailure= createAction('[userRegister]-registrationFailuer',props<{message:string}>())

export const userLogin = createAction('[userLogin]-userLogin',props<{loggedUser:Loggedusers}>())
export const userLoginSuccess = createAction('[userLoginSuccess]-UserLoginSuccess',props<{message:string}>())
export const userLoginFailure= createAction('[userLoginFailure]-userLoginFailure',props<{message:string}>())

export const getUserByID = createAction('[getUserByID]-getUserByID',props<{UserID:number}>())
export const getUserByIDSuccess = createAction('[getUserByIDSuccess}-getUserByIDSuccess',props<{user:iusers}>())
export const getUserByIDFailure = createAction('[getUserByIDFailure}-getUserByIDFailure',props<{message:string}>())

export const getUsers = createAction('[users]-users')
export const getUsersSuccess = createAction('[userSuccess]-userSuccess',props<{user:iusers[]}>())
export const getUsersFailure = createAction('[userFailure]-userFailure',props<{message:string}>())

export const getUserID = createAction('[getUserID]-getUserID',props<{UserID:number}>())

export const DeleteUser=createAction('[DeleteUser]-DeleteUser',props<{UserID:number}>())
export const DeleteUserSuccess=createAction('[DeleteUserSuccess]-DeleteUserSuccess',props<{message:string}>())
export const DeleteUserFailure=createAction('[DeleteUserFailure]-DeleteUserFailure',props<{message:string}>())





