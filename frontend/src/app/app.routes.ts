import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/pages/authorization/registration/registration.component';
import { LoginComponent } from './components/pages/authorization/login/login.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ParentsPageComponent } from './components/pages/parents-page/parents-page.component';
import { CuteGiraffeComponent } from './components/pages/cute-giraffe/cute-giraffe.component';
import { TasksPageComponent } from './components/pages/tasks-page/tasks-page.component';

export const routes: Routes = [
    {path: '', component: CuteGiraffeComponent},
    {path: 'register/', component: RegistrationComponent},
    {path: 'login/', component: LoginComponent}, 
    {path:'parent', component: ParentsPageComponent},
    {path: 'tasks', component: TasksPageComponent}
];
