import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import * as JobActions from '../../states/Actions/JobActions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class JobApplicationComponent implements OnInit {
  jobApplicationForm!: FormGroup;
  fileName: string = ''; 
  fileError:string = ''
  constructor(private fb: FormBuilder, private store: Store<AppState>, private route:ActivatedRoute, private router:Router, private authservice:AuthService) {}

  UserID!:string 
  currentJobId!: number;
  ngOnInit(): void {
    this.UserID =  this.authservice.getUserID() || ''
    const JobID = +this.route.snapshot.params['JobID'];
    if (!isNaN(JobID) && JobID > 0) {
      this.currentJobId = JobID;
      this.initializeForm();
    } else {
      console.error('Invalid Job ID:', JobID);
      this.router.navigate(['/']); // Redirect if jobId is invalid
    }
  }
  
  
  initializeForm(): void {
    this.jobApplicationForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      JobTitle:['', [Validators.required]],
      contactInfo: ['', [Validators.required]],
      employmentHistory: this.fb.array([]),
      educationHistory: this.fb.array([]),
      skills: this.fb.array([]),
      ResumePath: ['', [Validators.required]], 
      UserID:this.UserID
    });
  }



  

  get employmentHistory(): FormArray {
    return this.jobApplicationForm.get('employmentHistory') as FormArray;
  }

  get educationHistory(): FormArray {
    return this.jobApplicationForm.get('educationHistory') as FormArray;
  }

  get skills(): FormArray {
    return this.jobApplicationForm.get('skills') as FormArray;
  }

  removeEmploymentHistory(index: number) {
    this.employmentHistory.removeAt(index);
  }
  
  removeEducationHistory(index: number) {
    this.educationHistory.removeAt(index);
  }
  
  addEmploymentHistory() {
    const employmentGroup = this.fb.group({
      CompanyName: ['', Validators.required],
      JobTitle: ['', Validators.required],
      Responsibilities: ['', Validators.required],
      ReasonForLeaving: ['']
    });
    this.employmentHistory.push(employmentGroup);
  }

  addEducationHistory() {
    const educationGroup = this.fb.group({
      Institution: ['', Validators.required],
      Degree: ['', Validators.required],
      FieldOfStudy: ['', Validators.required]
    });
    this.educationHistory.push(educationGroup);
  }

  addSkill() {
    const skillControl = this.fb.control('', Validators.required);
    this.skills.push(skillControl);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
  
    if (input && input.files && input.files.length) {
      const file: File = input.files[0];
  
      if (file.size > 1048576) { 
        this.fileError = 'File size should not exceed 1MB';
        this.fileName = '';
      } else {
        this.fileName = file.name;
        this.fileError = '';
  
        // Set the file into the form control
        this.jobApplicationForm.get('ResumePath')!.setValue(file);

      }
    }
  }
  
  applyJob() {
    if (this.currentJobId && this.jobApplicationForm.valid) {
      const formData = new FormData();
      Object.entries(this.jobApplicationForm.value).forEach(([key, value]: [string, any]) => {
        if (key === 'employmentHistory' || key === 'educationHistory' || key === 'skills') {
          formData.append(key, JSON.stringify(value));
        } else if (key === 'resume' && value) {
          formData.append(key, value, value.name);
        } else {
          formData.append(key, value);
        }
      });

      this.store.dispatch(JobActions.applyJob({ formData, JobID: this.currentJobId}));
      this.router.navigate(['/jobs'])
   
      
    } else {
      this.jobApplicationForm.markAllAsTouched();
    }
  }
  
  


  prepopulate(){
    this.jobApplicationForm.setValue({

      Name:'christian abiodun',
      Email:'christian@gmail.com',
      contactinfo:'12dwWE$fyybve23',
 
    })
  }


  
  prepopulate1(){
    this.jobApplicationForm.patchValue({
      personalDetails:{
        Name:'Barmidele Sunmonu abiodun',
        Email:'christian@gmail.com'
      },
    })
  }
  onSubmit(){

  }



 

}
