import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent {
  constructor(){

  }
  form!:FormGroup
  onSubmit(){

  }

}
