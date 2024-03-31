import { jobsInterface } from "./Reducers/JobReducers";
import { ApplicationInterface } from "./Reducers/applicationReducers";
import { companyInterface } from "./Reducers/coursesReducers";
import { userinterface } from "./Reducers/userReducer";




export interface AppState{
    user:userinterface
    company:companyInterface
    jobs:jobsInterface
    applications:ApplicationInterface
}
