import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-job',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './single-job.component.html',
  styleUrl: './single-job.component.css'
})
export class SingleJobComponent implements OnInit{
  constructor( private router:Router, private route:ActivatedRoute){}


  ngOnInit(): void {
    
  }

}
