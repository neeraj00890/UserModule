import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsResolever } from './resolver/user-details-resolver';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AllUserResolver } from './resolver/all-user-resolver';


const routes: Routes = [
  {
    path: '', 
    component: LoginComponent 
  },
  {
    path: 'register', 
    component: RegistrationComponent

  },
  {
    path: 'profile/:email/:updateMode', 
    component: ProfileComponent,
    resolve:{userDetails:UserDetailsResolever}

  },
  {
    path: 'View-Users', 
    component: ViewUsersComponent,
    resolve:{allUsers:AllUserResolver}

  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class UserRoutingModule { }
