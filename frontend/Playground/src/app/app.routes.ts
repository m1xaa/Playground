import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { ParentskidsComponent } from './parentskids/parentskids.component';

export const routes: Routes = [
    { path: 'homepage', component:HomepageComponent },
    { path: 'login', component: LoginComponentComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'parentskids', component: ParentskidsComponent },
    { path: '',   redirectTo: '/homepage', pathMatch: 'full' }, 
];
