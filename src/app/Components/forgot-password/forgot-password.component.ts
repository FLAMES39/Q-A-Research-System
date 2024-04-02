import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder){

  }
  form!: FormGroup;
  ngOnInit(): void {

    this.form=this.fb.group({
      
        previousPassword:['',[Validators.required,Validators.email]],
        NewPassword:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]]
 
    })
  }
  updatePassword(){

  }

  onSubmit(){

  }
}
