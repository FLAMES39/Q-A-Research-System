import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor( private Router:Router , private fb:FormBuilder){

  }


  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
      
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
      
    })
  }
  onSubmit(){

  }
}
