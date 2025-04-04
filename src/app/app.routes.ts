import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WorkoutSummaryComponent } from './workout-summary/workout-summary.component';

export const routes: Routes = [
    {path:'', component: LandingComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'workout-summary', component: WorkoutSummaryComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

