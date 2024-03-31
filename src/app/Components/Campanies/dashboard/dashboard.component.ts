import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/appState';
import { CompanyComponent } from '../../company/company.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ApplicantTrackingComponent } from '../applicant-tracking/applicant-tracking.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MatSidenavModule,MatListModule,CompanyComponent,ApplicantTrackingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private store:Store<AppState>, private route:ActivatedRoute, private router:Router){

  }


  ngOnInit(): void {

  }

}
