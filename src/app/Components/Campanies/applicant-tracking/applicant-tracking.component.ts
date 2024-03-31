import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { iApplication } from '../../../interfaces';
import { Observable } from 'rxjs';
import * as ApplicationAction from '../../../states/Actions/aapplicationAction';
import { GetAllApplications } from '../../../states/Actions/aapplicationAction';
import { GetAllApplication } from '../../../states/Reducers/applicationReducers';

@Component({
  selector: 'app-applicant-tracking',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './applicant-tracking.component.html',
  styleUrl: './applicant-tracking.component.css'
})
export class ApplicantTrackingComponent implements OnInit{
  constructor( private store:Store<AppState>, private route:ActivatedRoute){

  }

  applications!:Observable<iApplication[]>
  ngOnInit(): void {
    this.applications =this.store.select(GetAllApplication)
    this.store.dispatch(ApplicationAction.GetAllApplications())
  }


}
