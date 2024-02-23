import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'profile', loadComponent:()=>import('../app/Components/profile/profile.component').then(p=>p.ProfileComponent)},
    {path:'footer',loadComponent:()=>import('../app/Components/footer/footer.component').then(f=>f.FooterComponent) },
    {path:'login', loadComponent:()=>import('../app/Components/login/login.component').then(l=>l.LoginComponent)},
    {path:'register',loadComponent:()=>import('../app/Components/registration/registration.component').then(r=>r.RegistrationComponent)},
    {path:'courses',loadComponent:()=>import('../app/Components/courses/courses.component').then(u=>u.CoursesComponent)}

];
