import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import {addCompany} from '../../../states/Actions/coursesActions'



@Component({
  selector: 'app-company-Register',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './company-Register.component.html',
  styleUrl: './company-register.component.css'
})
export class CompanyRegisterComponent {
  constructor(private fb:FormBuilder, private store:Store<AppState> ,private authservice:AuthService){}
  form!: FormGroup
  errorMessage=null
  unAllowedName=['Ademola','Christian','Abiodun']
  ngOnInit(): void {
   this.form=this.fb.group({
    
      Name:['',[Validators.required,this.checkUnAllowedName]],  
      Description:['',[Validators.required]],
      Industry:['',[Validators.required]],
      Logo:['',[Validators.required]],
      ContactInfo:['',[Validators.required]],
      Email:[null,[Validators.required,Validators.email],[<AsyncValidatorFn>this.checkEmail]],
      Password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{3,30}$')]],
      
    
   })
  }
  checkEmail(controls:FormControl):Promise<{[x:string]:Boolean } |null>{
    const promise= new Promise<{[x:string]:Boolean } |null>((resolve,reject)=>{
      if(controls.value==="testemail@gmail.com"){
        setTimeout(()=>{
          resolve ({emailUnallowed:true})
        },1500)
      }
     else{
      resolve(null)
     }
    })
    return promise
 }


 checkUnAllowedName=(controls:FormControl):{[x:string]:boolean} | null=>{
    if(this.unAllowedName.includes(controls.value)){
      return {unAllowedName:true}
    }
    return null
 }
onsubmit(){

}

submitForm(){
console.log(this.form.value);

this.store.dispatch(addCompany({newCompany:this.form.value}))
}
}
