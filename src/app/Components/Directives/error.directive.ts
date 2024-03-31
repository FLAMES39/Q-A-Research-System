import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appError]',
  standalone: true
})
export class ErrorDirective {

  constructor(public viewContainerref:ViewContainerRef) { }

}
