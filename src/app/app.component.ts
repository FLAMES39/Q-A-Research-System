import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { ErrorComponent } from './error/error.component';
import { ErrorDirective } from './Components/Directives/error.directive';
import { Subscription } from 'rxjs';
import { jobs } from './interfaces';
import { JobsService } from './services/jobs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,FooterComponent,ErrorDirective,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Q';
  message!:string | null
  sub!:Subscription
  searchJob!:string
  jobs!:jobs[]

  @ViewChild(ErrorDirective) errorHost!:ErrorDirective
  constructor( public authservice:AuthService , private Router:Router ,private route:ActivatedRoute ,private jobservice:JobsService
    ,private componentFactory:ComponentFactoryResolver
    ){

  }
  showError(){
    this.message= "An Error occured Please try again later...."
    this.createComponent()
  }

  createComponent(){
    const ErrorComponentFactory = this.componentFactory.resolveComponentFactory(ErrorComponent)
    const HostViewContainer = this.errorHost.viewContainerref
    HostViewContainer.clear()
    const componentref = HostViewContainer.createComponent(ErrorComponentFactory)
    componentref.instance.message = this.message
    this.sub=componentref.instance.close.subscribe(()=>{
      HostViewContainer.clear()
      this.sub.unsubscribe()
    })
  }

  search(): void {
    if (this.searchJob) {
      this.jobservice.searchJobs(this.searchJob).subscribe(
        (jobs) => {
         this.jobs = jobs
           console.log(jobs);
        },
        (error) => {
          // Handle the error
          console.error('Error searching questions:', error);
        }
      );
    }
  }


}
