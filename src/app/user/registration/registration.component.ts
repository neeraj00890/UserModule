import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from './sharedService/DataStorageService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService,private _snackBar: MatSnackBar,private route:Router) {

   }

  hasError:boolean;
  errorMessages=[];

  ngOnInit() {
  }

  RegisterClick(regForm:NgForm){
    if(regForm.value.password!==regForm.value.confirmPassword){
      this._snackBar.open('password does not match','Ok',{
        duration:2000
      })
      return;
    }
    let UserModel={
      email:regForm.value.email,
      password:regForm.value.password,
      gender:regForm.value.gender,
      firstName:regForm.value.firstName,
      lastName:regForm.value.lastName,
    }
    this.dataStorageService.storeUser(UserModel,(message)=>{
     if(message=='Success'){
      this._snackBar.open(message,'Ok',{
        duration:2000
      })
      this.route.navigate(['']);
      regForm.reset();
     }
     else{
      this._snackBar.open(message,'Ok',{
        duration:2000
      })
     }
      
    });
  }
}
