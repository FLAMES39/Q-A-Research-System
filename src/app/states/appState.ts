import { jobsInterface } from "./Reducers/JobReducers";
import { coursesInterface } from "./Reducers/coursesReducers";
import { userinterface } from "./Reducers/userReducer";




export interface AppState{
    user:userinterface
    courses:coursesInterface
    jobs:jobsInterface
}