import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import { userLogin } from '../../states/Actions/userActions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor( private Router:Router , private fb:FormBuilder ,private store:Store<AppState>){

  }


  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      
        Email:['',[Validators.required,Validators.email]],
        Password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
      
    })
  }


  onSubmit(){

  }


  onLogin(){
    // console.log(this.form.value);
    this.store.dispatch(userLogin({loggedUser:this.form.value}))
  }
}


