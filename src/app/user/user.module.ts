import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
//import { UserRoutingModule } from './user.routing.module';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DataStorageService } from './registration/sharedService/DataStorageService';
import { FormsModule } from '@angular/forms';
import { UserDetailsResolever } from './resolver/user-details-resolver';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AllUserResolver } from './resolver/all-user-resolver';
import { UserRoutingModule } from './user.routing.module';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ProfileComponent,ViewUsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule
    
    

    
  ],
  providers:[DataStorageService,UserDetailsResolever,AllUserResolver]
})
export class UserModule { }
