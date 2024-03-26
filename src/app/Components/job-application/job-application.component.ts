import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import * as JobActions from '../../states/Actions/JobActions';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class JobApplicationComponent implements OnInit {
  jobApplicationForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.jobApplicationForm = this.fb.group({
      personalDetails: this.initPersonalDetails(),
      employmentHistory: this.fb.array([this.initEmploymentHistory()]),
      educationHistory: this.fb.array([this.initEducationHistory()]),
      userSkills: this.fb.array([this.initSkills()])
    });
  }

  initPersonalDetails(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required]]
    });
  }

  initEmploymentHistory(): FormGroup {
    return this.fb.group({
      companyName: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
      reasonForLeaving: ['']
    });
  }

  initEducationHistory(): FormGroup {
    return this.fb.group({
      institution: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      fieldOfStudy: ['', [Validators.required]]
    });
  }

  initSkills(): FormControl {
    return this.fb.control('', [Validators.required]);
  }

  addSkill() {
    const control = <FormArray>this.jobApplicationForm.get('userSkills');
    control.push(this.initSkills());
  }

  removeSkill(index: number) {
    const control = <FormArray>this.jobApplicationForm.get('userSkills');
    control.removeAt(index);
  }

  addEmploymentHistory() {
    const control = <FormArray>this.jobApplicationForm.get('employmentHistory');
    control.push(this.initEmploymentHistory());
  }

  removeEmploymentHistory(index: number) {
    const control = <FormArray>this.jobApplicationForm.get('employmentHistory');
    control.removeAt(index);
  }

  addEducationHistory() {
    const control = <FormArray>this.jobApplicationForm.get('educationHistory');
    control.push(this.initEducationHistory());
  }

  removeEducationHistory(index: number) {
    const control = <FormArray>this.jobApplicationForm.get('educationHistory');
    control.removeAt(index);
  }

  onSubmit() {
    if (this.jobApplicationForm.valid) {
      this.store.dispatch(JobActions.applyJob({ applyJob: this.jobApplicationForm.value }));
    }
  }
}
