import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  constructor( private Route:Router, private fb:FormBuilder){

  }
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.fb.group({
     
       name:['',[Validators.required]],
       email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
     
    })
   }
  onSubmit(){

  }
}
