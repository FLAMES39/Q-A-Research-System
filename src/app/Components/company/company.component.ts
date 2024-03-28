import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/appState';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  constructor(private store:Store<AppState>, private router:Router , private route:ActivatedRoute){

  }

}
