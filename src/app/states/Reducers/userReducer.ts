import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as userActions  from '../Actions/userCounter'




export interface userinterface{
    userRegistrationSuccess:string
    userRegistrationFailure:string
    userLoginSuccess:string
    userLoginFailure:string
}

const initialiState:userinterface={
    userRegistrationSuccess: "",
    userRegistrationFailure: "",
    userLoginSuccess: "",
    userLoginFailure: ""
}

const userRegisterState= createFeatureSelector<userinterface>('user')
export const  userRegisterSuccess= createSelector(userRegisterState,(state)=>state.userRegistrationSuccess)
export const  userRegisterFailure= createSelector(userRegisterState,(state)=>state.userRegistrationFailure)

const userLoggedinState=createFeatureSelector<userinterface>('user')
export const userLoggedinSuccess=createSelector(userLoggedinState, (state)=>state.userLoginSuccess)
export const userLoggedinFailure=createSelector(userLoggedinState, (state)=>state.userLoginFailure)

export const userReducer = createReducer(
    initialiState,
    on(userActions.userRegistrationSuccess,(state,action):userinterface=>{
        return{
            ...state,
            userRegistrationFailure:'',
            userRegistrationSuccess:action.message
        }
    }),
    on(userActions.userRegistrationFailure,(state,action):userinterface=>{
        return{
            ...state,
            userRegistrationSuccess:'',
            userRegistrationFailure:action.message
        }
    }),
    on(userActions.userLoginSuccess,(state,action):userinterface=>{
            return {
                ...state,
                userLoginFailure:'',
                userLoginSuccess:action.message
            }
    }),
    on(userActions.userLoginFailure,(state,action):userinterface=>{
        return{
            ...state,
            userLoginSuccess:'',
            userLoginFailure:action.message
        }
    })
)