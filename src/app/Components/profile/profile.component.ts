import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import { Observable } from 'rxjs';
import { iusers } from '../../interfaces';
import * as userAction from '../../states/Actions/userActions'
import { UserService } from '../../services/user.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getUsers } from '../../states/Reducers/userReducer';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private store:Store<AppState>, private router:Router, private route:ActivatedRoute ,private authservice:AuthService, private usersevice:UserService, private fb:FormBuilder){

  }

  UserID!:string 
  user!:Observable<iusers>
  showForm!: boolean
  updateUserDataForm!:FormGroup
  ngOnInit(): void {
    this.route.params.subscribe( (u:Params)=>{
      this.store.dispatch(userAction.getUsers())
      this.store.dispatch(userAction.getUserByIDSuccess({user:u['user']}))
      let userID = u['UserID']
     this.user= this.usersevice.getUserByID(u['userID'])
    })

    this.UserID =  this.authservice.getUserID() || ''


  }
  onUpdate(){
    this.updateUserDataForm = this.fb.group({
      Name:[localStorage.getItem('Name')],
      Email:['',[Validators.required]],
      Bio:['',[Validators.required]],
      UserID:this.UserID,
      skills:this.fb.array([])
    })
  }

  
  onUpdateForm(){
    this.showForm= true
  }



  updateUserProfile(UserID:number,updatedUser:iusers){
      this.store.dispatch(userAction.updatedUser({UserID,updatedUser:this.updateUserDataForm.value}))
      this.router.navigate(['/profile'])
  }

  
  addSkill(){
    const controls=new FormControl(null,[Validators.required]);
    (this.updateUserDataForm.get(' skills') as FormArray).push(controls)
   }
   getControls(){
   return (this.updateUserDataForm.get('skills') as FormArray).controls
   }
   
  
   removerControl (i:number){
    (this.updateUserDataForm.get('skills')as FormArray).removeAt(i)
   }



}



