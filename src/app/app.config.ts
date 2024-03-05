import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { jobReducers } from './states/Reducers/JobReducers';
import { userReducer } from './states/Reducers/userReducer';
import { userEffects } from './states/Effects/userEffects';
import { jobEffects } from './states/Effects/JobEffects';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    provideStore({user:userReducer, jobs:jobReducers}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideEffects([userEffects,jobEffects]),
    provideHttpClient(withFetch())]
  
};
