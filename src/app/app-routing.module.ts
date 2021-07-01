import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { DashbordModeratorComponent } from './dashbord-moderator/dashbord-moderator.component';
import { DashbordUserComponent } from './dashbord-user/dashbord-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: DashbordUserComponent },
  { path: 'mod', component: DashbordModeratorComponent },
  { path: 'admin', component: DashbordAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
