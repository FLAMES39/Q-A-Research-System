import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as jobActions  from '../../states/Actions/JobActions'
import { getAllJobs } from '../../states/Reducers/JobReducers';
import { iCompanies, iusers, jobs } from '../../interfaces';
import  * as userActions  from '../../states/Actions/userActions'
import { getUsers } from '../../states/Reducers/userReducer';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import * as companyAction from '../../states/Actions/coursesActions'
import { getCompany } from '../../states/Reducers/coursesReducers';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
   constructor( private store:Store<AppState>, private router:Router, private route:ActivatedRoute, private companyservice:CompanyService){}
  showUsers = false;
  showJobs = true;
  showCompanies = false
  jobs:jobs[] =[]
  users!:iusers[]
  companies:iCompanies[] = []
  ngOnInit(): void {
    if (localStorage.getItem('role')=== '1') {
      this.router.navigate(['/admin'])
      
    }
    else{
      this.router.navigate(['/jobs'])
    }



    this.store.dispatch(jobActions.Getjobs({page:1 , pageSize:10}))
    this.store.select(getAllJobs).subscribe( jobs =>{
      this.jobs = jobs as jobs[]
    })


    this.store.dispatch(userActions.getUsers())
    this.store.select(getUsers).subscribe( users =>{
      const userstose =users.filter(u=>u.Role !== 'admin')
      this.users = userstose as iusers[]
    })
    
    this.store.dispatch(companyAction.GetCompany())
    this.store.select(getCompany).subscribe( companies =>{
      this.companies= companies as iCompanies[]

    })

  }
  deleteUser(UserID:number){
    this.store.dispatch(userActions.DeleteUser({UserID:UserID}))

  }
  deleteComapny(CompanyID:number){
    this.store.dispatch(companyAction.DeleteCompany({companyID:CompanyID}))

  }

  deleteJob(JobID:number){
    this.store.dispatch(jobActions.DeleteJob({JobID:JobID}))
  }

  toggleShowJobs() {
    this.showJobs = true;
    this.showUsers = false;
    this.showCompanies = false
  }

  toggleShowUsers() {
    this.showJobs = false;
    this.showUsers = true;
    this.showCompanies = false
  }
  toggleShowCompanies(){
    this.showCompanies = true
    this.showUsers = false
    this.showJobs = false
  }

}
