import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,RouterModule} from '@angular/router';
import { DepartmentsComponent } from '../SChool/departments/departments.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterModule, DepartmentsComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  constructor( private Router:Router ,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    
  }
}
