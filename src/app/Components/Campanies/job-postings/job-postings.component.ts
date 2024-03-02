import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import * as jobActions from '../../../states/Actions/JobActions'

@Component({
  selector: 'app-job-postings',
  standalone: true,
  imports: [],
  templateUrl: './job-postings.component.html',
  styleUrl: './job-postings.component.css'
})
export class JobPostingsComponent {

    constructor(private store:Store<AppState>){}
    onsubmit(){

    }
    postJob(){
      this.store.dispatch(jobActions.addJob(this.form.value))
    }
    
}
