import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as userActions  from '../Actions/userActions'
import { Loggedusers, iusers } from "../../interfaces";




export interface userinterface{
    user:iusers[],
    getUsersError:string
    userRegistrationSuccess:string
    userRegistrationFailure:string
    userLoginSuccess: string
    userLoginFailure:string
    getUserByIDSuccess: iusers | null 
    getUserByIDFailure: string
    UserID: number
    DeleteUserSuccess:string
    DeleteUserFailure:string
   
    
}

const initialiState:userinterface={
    user: [],
    getUsersError: "",
    userRegistrationSuccess: "",
    userRegistrationFailure: "",
    userLoginSuccess: "",
    userLoginFailure: "",
    getUserByIDSuccess: null,
    getUserByIDFailure: "",
    UserID: 0,
    DeleteUserSuccess: "",
    DeleteUserFailure: ""
}

const userRegisterState= createFeatureSelector<userinterface>('user')
export const  userRegisterSuccess= createSelector(userRegisterState,(state)=>state.userRegistrationSuccess)
export const  userRegisterFailure= createSelector(userRegisterState,(state)=>state.userRegistrationFailure)

const userLoggedinState=createFeatureSelector<userinterface>('user')
export const userLoggedinSuccess=createSelector(userLoggedinState, (state)=>state.userLoginSuccess)
export const userLoggedinFailure=createSelector(userLoggedinState, (state)=>state.userLoginFailure)

const getUserState = createFeatureSelector<userinterface>('user')
export const getUsers = createSelector(getUserState,(state)=>state.user)
export const  getUserID = createSelector(getUserState,(state)=>state.UserID)
export const  getUserByID = createSelector(getUsers,getUserID,(user,UserID)=>user.find(usr=>usr.UserID === UserID) as iusers)

export const userReducer = createReducer(
    initialiState,
    on(userActions.userRegistrationSuccess,(state,action):userinterface=>{
        return{
            ...state,
            userRegistrationSuccess:action.message,
            userRegistrationFailure:''
            
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
            userLoginSuccess: "",
            userLoginFailure:action.message
        }
    }),
    on(userActions.getUserID,(state, action):userinterface=>{
        return{
            ...state,
            UserID:action.UserID,
            
        }
    }),
    on(userActions.getUserByIDSuccess,(state, action):userinterface=>{
        return{
            ...state,
            getUserByIDSuccess:action.user,
            getUserByIDFailure:''

        }
    }),
    on(userActions.getUserByIDFailure,(state, action):userinterface=>{
        return{
            ...state,
            getUserByIDFailure:action.message,
            getUserByIDSuccess: null

        }
    }),
    on(userActions.getUsersSuccess,(state, action):userinterface=>{
        return{
            ...state,
            user:action.user,
            getUsersError:''

        }
    }),
    on(userActions.getUsersFailure,(state, action):userinterface=>{
        return{
            ...state,
            getUsersError:action.message,
            user: []

        }
    }),
    on(userActions.DeleteUserSuccess,(state, action):userinterface=>{
        return{
            ...state,
            DeleteUserSuccess:action.message,
            DeleteUserFailure: ''

        }
    }),
    on(userActions.DeleteUserFailure,(state, action):userinterface=>{
        return{
            ...state,
            DeleteUserFailure:action.message,
            DeleteUserSuccess: ''

        }
    }),
)
