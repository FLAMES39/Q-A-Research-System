import { Routes } from '@angular/router';
import { CanActivateService } from './services/can-activate.service';

export const routes: Routes = [
    // {path:'job',loadChildren:()=>import('./Components/jobs/job/job.module').then(j=>j.JobModule)},
    {path:'jobs', loadComponent: () => import('../app/Components/jobs/jobs.component').then(m=>m.JobsComponent)},
    {path:'profile', loadComponent:()=>import('../app/Components/profile/profile.component').then(p=>p.ProfileComponent)},
    {path:'footer',loadComponent:()=>import('../app/Components/footer/footer.component').then(f=>f.FooterComponent) },
    {path:'login', loadComponent:()=>import('../app/Components/login/login.component').then(l=>l.LoginComponent)},
    {path:'register',loadComponent:()=>import('../app/Components/registration/registration.component').then(r=>r.RegistrationComponent)},
    {path:'company',canActivate:[CanActivateService],loadComponent:()=>import('./Components/company/company.component').then(u=>u.CompanyComponent)},
    {path:'apply/:JobID',loadComponent:()=>import('../app/Components/job-application/job-application.component').then(a=>a.JobApplicationComponent)},
    {path:'allJobs',loadComponent: ()=>import ('../app/Components/all-jobs/all-jobs.component').then(a=>a.AllJobsComponent)},
    {path:'single/:JobID',loadComponent:()=>import('../app/Components/single-job/single-job.component').then(s=>s.SingleJobComponent)},
    {path:'compLog', loadComponent: ()=>import('../app/Components/Campanies/company-login/company-login.component').then(cl=>cl.CompanyLoginComponent)},
    // {path: 'tracking',loadComponent:()=>import('./Components/Campanies/dashboard/applicant-tracking/applicant-tracking.component').then(t=>t.ApplicantTrackingComponent)},
    {path:'compReg', loadComponent:()=>import('../app/Components/Campanies/company-register/company-register.component').then(cr=>cr.CompanyRegisterComponent)},
    {path:'dashboard' , loadComponent: ()=>import('../app/Components/Campanies/dashboard/dashboard.component').then(d=>d.DashboardComponent),
    
        children:[
            {path:'posting',loadComponent: ()=> import('../app/Components/Campanies/job-postings/job-postings.component').then(jp=>jp.JobPostingsComponent)},
             {path: 'tracking',loadComponent:()=>import('../app/Components/Campanies/applicant-tracking/applicant-tracking.component').then(t=>t.ApplicantTrackingComponent)},
            {path: 'analytics',loadComponent:()=>import('./Components/Campanies/analytics/analytics.component').then(an=>an.AnalyticsComponent)},
            { path: '', redirectTo: 'job-postings', pathMatch: 'full' }
        ]
    },
    // admin route
    {
        path: 'admin', loadComponent: (()=>import('../app/Components/admin/admin.component').then(a=>a.AdminComponent))
    },
];

