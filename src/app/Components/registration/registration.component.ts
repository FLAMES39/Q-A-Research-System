import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../states/appState';
import { Store } from '@ngrx/store';
import { userRegistration } from '../../states/Actions/userActions';
import { StoreModule } from '@ngrx/store';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  constructor( private Route:Router, private fb:FormBuilder , private store:Store<AppState> ){

  }
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
     
       Name:['',[Validators.required]],
       Email:['',[Validators.required,Validators.email]],
       Password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
     
    })
   }
  onSubmit(){
 
    
  }
  submit(){
    this.store.dispatch(userRegistration({newUser:this.form.value}))
    
  }
}
