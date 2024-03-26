import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import {LoggedCompany} from '../../../states/Actions/coursesActions'


@Component({
  selector: 'app-company-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './company-login.component.html',
  styleUrl: './company-login.component.css'
})
export class CompanyLoginComponent implements OnInit{

  constructor(private store:Store<AppState>, private fb:FormBuilder, private router:Router){

  }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
 
    })
  }
  onSubmit(){

  }
  
  loginCompany(){
    this.store.dispatch(LoggedCompany({loggedCompany:this.loginForm.value}))
  }

}
