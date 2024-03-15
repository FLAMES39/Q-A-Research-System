import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import * as jobAction from '../../states/Actions/JobActions'

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent implements OnInit{
  constructor(private fb:FormBuilder, private store:Store<AppState>){

  }
  jobApplicationForm!:FormGroup
  ngOnInit(): void {
    this.jobApplicationForm = this.fb.group({
      JobID: ['', Validators.required],
      UserID: ['', Validators.required],
      CoverLetter: ['', [Validators.required, Validators.minLength(100)]]
    });
  }
  applyJob(){

  }
  submitForm(){
    this.store.dispatch(jobAction.applyJob({applyJob:this.jobApplicationForm.value}))
  }

}
