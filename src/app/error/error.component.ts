import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
   constructor(){

   }

   @Input () message!:string | null
   @Output () close = new EventEmitter<void>()


   onClose(){
    this.close.emit()
   }
   
}
