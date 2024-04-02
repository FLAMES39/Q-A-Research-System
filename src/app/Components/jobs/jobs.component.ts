import { Component, OnInit } from '@angular/core';
import { AppState } from '../../states/appState';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import {  jobs } from '../../interfaces';
import { getAllJobs } from '../../states/Reducers/JobReducers';
import * as jobsAction from '../../states/Actions/JobActions'
import { CommonModule } from '@angular/common';
import { AllJobsComponent } from '../all-jobs/all-jobs.component';
import { SingleJobComponent } from '../single-job/single-job.component';



@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule,AllJobsComponent,SingleJobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  jobs!:Observable<jobs[]>
  constructor(private store:Store<AppState> , private router:Router){

  }
  ngOnInit(): void {
    this.jobs=this.store.select(getAllJobs)
    this.store.dispatch(jobsAction.Getjobs({page:1,pageSize:10}))
    
     
  }

  viewJob(JobID:number){
    this.router.navigate(['/single',JobID])
  }

}
