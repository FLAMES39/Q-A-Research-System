import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { jobs } from '../../interfaces';
import { getAllJobs } from '../../states/Reducers/JobReducers';
import * as jobsAction from '../../states/Actions/JobActions'




@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})
export class AllJobsComponent implements OnInit{

  jobs!:Observable<jobs[]>
  constructor(private store:Store<AppState>,route:ActivatedRoute,  private router:Router){

  }
  ngOnInit(): void {
  console.log(  this.jobs=this.store.select(getAllJobs)
  );
  
   this.store.dispatch(jobsAction.Getjobs());
  }


  viewMore(companyID:number){
    this.router.navigate(['/single',companyID])
  }

}
