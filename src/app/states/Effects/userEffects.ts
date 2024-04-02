import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import * as UserActions from '../Actions/userActions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { error } from "console";
import { AuthService } from "../../services/auth.service";




@Injectable()

export class userEffects{
    constructor( private action$: Actions , private userService:UserService , private router:Router, private authservice:AuthService){

    }

    RegisterUser$=createEffect( ()=> {
        return this.action$.pipe(
            ofType(UserActions.userRegistration),
            mergeMap( action=>{
                return this.userService.registerStudent(action.newUser).pipe(
                    tap(
                        ms=>{
                            this.router.navigate(['/login'])
                        }
                    ),
                    map(ms=> UserActions.userRegistrationSuccess({message:ms.message})),
                    catchError((res=> of(UserActions.userRegistrationFailure({message:res.message}))))
                )
            })
        )
    })
    loggedUser$=createEffect( ()=>{
        return this.action$.pipe(
            ofType(UserActions.userLogin),
            mergeMap( action =>{
                return this.userService.loginUser(action.loggedUser).pipe(
                    tap(
                        res=>{
                            this.authservice.loggedIn(res)
                            this.router.navigate(['/jobs'])
                        }
                    ),
                    map(msg=> UserActions.userLoginSuccess({message:msg.token})),
                    catchError(res =>of(UserActions.userLoginFailure({message:res.message})))
                )
            })

        )
    })
    getUserByID$ = createEffect( ()=>{
        return this.action$.pipe(
            ofType(UserActions.getUserByID),
            mergeMap( action =>{
                return this.userService.getUserByID(action.UserID).pipe(
                    map( user =>{
                        return UserActions.getUserByIDSuccess({user})
                    }),
                    catchError( error => of(UserActions.getUserByIDFailure({message:error})))
                )
            })
        )
    })
    getUsers$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(UserActions.getUsers),
            mergeMap(action=>{
                return this.userService.getUsers().pipe(
                    map(user => {
                        return UserActions.getUsersSuccess({user})
                    }),
                    catchError( error => of(UserActions.getUsersFailure({message:error})))
                )
            })
        )
    })
    deletUser$= createEffect(()=>{
        return this.action$.pipe(
            ofType(UserActions.DeleteUser),
            mergeMap(action=>{
                return this.userService.deleteUser(action.UserID).pipe(
                    map( msg => UserActions.DeleteUserSuccess({message:msg.message})),
                    catchError(error => of(UserActions.DeleteUserFailure({message:error})))
                )
            })
        )
    })

}

