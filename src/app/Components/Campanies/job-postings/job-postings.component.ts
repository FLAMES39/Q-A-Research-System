import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import * as jobActions from '../../../states/Actions/JobActions'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addJob } from '../../../states/Actions/JobActions';

@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './job-postings.component.html',
  styleUrl: './job-postings.component.css'
})
export class JobPostingsComponent implements OnInit{

    constructor(private store:Store<AppState> , private fb:FormBuilder){}
    postForm!:FormGroup


    ngOnInit(): void {
      this.postForm=this.fb.group({
        Title:['',[Validators.required]],
        Description:['',[Validators.required]],
        Location:['',[Validators.required]],
        SalaryRange:['',[Validators.required]],
        Type:['default',[Validators.required]],
        PostedDate:['',[Validators.required]],
        ExpiryDate:['',[Validators.required]]

      })
      
    }

    
    onsubmit(){

    }

    postJob(){
      console.log(this.postForm.value);   
      this.store.dispatch(addJob({newJob:this.postForm.value}))
    }
    
}
