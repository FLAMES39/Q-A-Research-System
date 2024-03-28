import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import * as JobActions from '../../states/Actions/JobActions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component,OnInit } from '@angular/core';

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
  constructor(private fb: FormBuilder, private store: Store<AppState>, private route:ActivatedRoute, private router:Router) {}


  currentJobId!: number;
  ngOnInit(): void {
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
      contactInfo: ['', [Validators.required]],
      employmentHistory: this.fb.array([]),
      educationHistory: this.fb.array([]),
      skills: this.fb.array([]),
      resume: ['', [Validators.required]]  // Assume 'resume' is a required field
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
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      responsibilities: ['', Validators.required],
      reasonForLeaving: ['']
    });
    this.employmentHistory.push(employmentGroup);
  }

  addEducationHistory() {
    const educationGroup = this.fb.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required]
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
        this.jobApplicationForm.get('resume')!.setValue(file);

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

      this.store.dispatch(JobActions.applyJob({ formData, JobID: this.currentJobId }));
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
