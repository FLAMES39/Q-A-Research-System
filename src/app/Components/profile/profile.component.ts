import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';
import { Observable } from 'rxjs';
import { iusers } from '../../interfaces';
import * as userAction from '../../states/Actions/userActions'
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private store:Store<AppState>, private route:ActivatedRoute , private usersevice:UserService){

  }

  user!:Observable<iusers>

  ngOnInit(): void {
    this.route.params.subscribe( (u:Params)=>{
      this.store.dispatch(userAction.getUsers())
      this.store.dispatch(userAction.getUserByIDSuccess({user:u['user']}))
      this.usersevice.getUserByID(u['userID'])
    })
  }
}
