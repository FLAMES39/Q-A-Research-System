import { createAction, props } from "@ngrx/store";
import { Loggedusers, Newusers } from "../../interfaces";






export const userRegiistration = createAction('[userGregister]-registration',props<{newUser:Newusers}>())
export const userRegistrationSuccess = createAction('[userRegister]-registrationSuccess',props<{message:string}>())
export const userRegistrationFailure= createAction('[userRegister]-registrationFailuer',props<{message:string}>())

export const userLogin = createAction('[userLogin]-userLogiSuccessfull',props<{loggedUser:Loggedusers}>())
export const userLoginSuccess = createAction('[userRegister]-LoginnSuccess',props<{message:string}>())
export const userLoginFailure= createAction('[userRegister]-LoginFailuer',props<{message:string}>())
