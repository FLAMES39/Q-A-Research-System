import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { jobs } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import * as jobAction from '../../states/Actions/JobActions'
import { JobsService } from '../../services/jobs.service';
@Component({
  selector: 'app-single-job',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.css'
})
export class SingleJobComponent implements OnInit{
  constructor( private router:Router, private route:ActivatedRoute , private store:Store<AppState>, private jobService:JobsService){}

  job!:Observable<jobs>
  ngOnInit(): void {
    this.route.params.subscribe( (j:Params)=>{
      this.store.dispatch(jobAction.Getjobs({page:1 , pageSize:10}))
      this.store.dispatch(jobAction.GetJobByIdSuccess({jobs:j['jobs']}))
      let jobID = j['JobID']
      this.job=this.jobService.getJobsById(j['JobID'])
    })
    
  }
  applyJob(JobID:number){
    this.router.navigate(['/apply',JobID])
  }
}
