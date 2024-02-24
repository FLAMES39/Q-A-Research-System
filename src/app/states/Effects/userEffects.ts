import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import * as UserActions from '../Actions/userCounter'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";




@Injectable()

export class userEffects{
    constructor( private action$: Actions , private userService:UserService , private router:Router){

    }

    RegisterUser$=createEffect( ()=> {
        return this.action$.pipe(
            ofType(UserActions.userRegiistration),
            mergeMap( action=>{
                return this.userService.registerStudent(action.newUser).pipe(
                    tap(
                        ms=>{
                            this.router.navigate(['/courses'])
                        }
                    ),
                    map(ms=> UserActions.userRegistrationSuccess({message:ms.message})),
                    catchError(res=> of(UserActions.userRegistrationFailure({message:res.message})))
                )
            })
        )
    })
    loginStudent$=createEffect( ()=>{
        return this.action$.pipe(
            ofType(UserActions.userLogin),
            mergeMap( action =>{
                return this.userService.loginUser(action.loggedUser).pipe(
                    tap(
                        ms=>{
                            this.router.navigate(['/courses'])
                        }
                    ),
                    map(msg=> UserActions.userLoginSuccess({message:msg.message})),
                    catchError(res =>of(UserActions.userLoginFailure({message:res.message})))
                )
            })

        )
    })
}