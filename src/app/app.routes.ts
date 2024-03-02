import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {path:'profile', loadComponent:()=>import('../app/Components/profile/profile.component').then(p=>p.ProfileComponent)},
    {path:'footer',loadComponent:()=>import('../app/Components/footer/footer.component').then(f=>f.FooterComponent) },
    {path:'login', loadComponent:()=>import('../app/Components/login/login.component').then(l=>l.LoginComponent)},
    {path:'register',loadComponent:()=>import('../app/Components/registration/registration.component').then(r=>r.RegistrationComponent)},
    {path:'company',loadComponent:()=>import('./Components/company/company.component').then(u=>u.CompanyComponent)},
    {path:'jobs',loadComponent:()=>import('./Components/jobs/jobs.component').then(j=>j.JobsComponent)},
    {path:'apply',loadComponent:(()=>import('../app/Components/job-application/job-application.component').then(a=>a.JobApplicationComponent))},
    {path:'single',loadComponent:( ()=>import('../app/Components/single-job/single-job.component').then(s=>s.SingleJobComponent))},
    {path:'dashboard' , loadComponent:( ()=>import('../app/Components/Campanies/dashboard/dashboard.component').then(d=>d.DashboardComponent)),
        children:[
            {path:'posting',loadComponent:( ()=> import('../app/Components/Campanies/job-postings/job-postings.component').then(jp=>jp.JobPostingsComponent))},
            {path: 'tracking',loadComponent:( ()=>import('../app/Components/Campanies/applicant-tracking/applicant-tracking.component').then(t=>t.ApplicantTrackingComponent))},
            {path: 'analytics',loadComponent:(()=>import('../app/Components/Campanies/analytics/analytics.component').then(an=>an.AnalyticsComponent))},
            { path: '', redirectTo: 'job-postings', pathMatch: 'full' }
        ]

}
];
