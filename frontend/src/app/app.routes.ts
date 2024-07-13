import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/pages/authorization/registration/registration.component';
import { LoginComponent } from './components/pages/authorization/login/login.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ParentsPageComponent } from './components/pages/parents-page/parents-page.component';
import { CuteGiraffeComponent } from './components/pages/cute-giraffe/cute-giraffe.component';

export const routes: Routes = [
    {path: 'register/', component: RegistrationComponent},
    {path: 'login/', component: LoginComponent}, 
    {path:'parent', component: ParentsPageComponent},
    {path: '', component: CuteGiraffeComponent}
];
