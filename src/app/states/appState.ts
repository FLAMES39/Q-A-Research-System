import { jobsInterface } from "./Reducers/JobReducers";
import { companyInterface } from "./Reducers/coursesReducers";
import { userinterface } from "./Reducers/userReducer";




export interface AppState{
    user:userinterface
    company:companyInterface
    jobs:jobsInterface
}