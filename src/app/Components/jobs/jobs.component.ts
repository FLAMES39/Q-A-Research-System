import { Component, OnInit } from '@angular/core';
import { AppState } from '../../states/appState';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import {  jobs } from '../../interfaces';
import { getAllJobs } from '../../states/Reducers/JobReducers';
import * as jobsAction from '../../states/Actions/JobActions'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  jobs!:Observable<jobs[]>
  constructor(private store:Store<AppState> , private router:Router){

  }
  ngOnInit(): void {
     this.jobs=this.store.select(getAllJobs)
     console.log(    this.store.dispatch(jobsAction.Getjobs())
     );
     
  }

  viewMore(companyID:number){
    this.router.navigate(['/single',companyID])
  }

}
