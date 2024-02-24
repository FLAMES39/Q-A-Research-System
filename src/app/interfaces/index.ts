import exp from "constants"

export interface iusers {
    UserID: string,
    Name: string,
    Password: string,
    Email: string,
    Role: string,
    IsDeleted:number
}

export interface Newusers {
    Name: string,
    Password: string,
    Email: string,

}
export interface AddUserSuccess{
    message:string
}
export interface Loggedusers {
    Password: string,
    Email: string,
    token:string,
    role:string
}

export interface loggedUserSuccess{
    role:string
    token:string
    Name:string
    
}