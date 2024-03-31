import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { ErrorComponent } from './error/error.component';
import { ErrorDirective } from './Components/Directives/error.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,FooterComponent,ErrorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Q';
  message!:string | null
  sub!:Subscription

  @ViewChild(ErrorDirective) errorHost!:ErrorDirective
  constructor( public authservice:AuthService , private Router:Router ,private route:ActivatedRoute 
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
}
