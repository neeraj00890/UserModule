import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../registration/sharedService/DataStorageService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin:boolean;
  constructor(private dataStorageService:DataStorageService,private router:Router,private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm){
    let email=loginForm.value.email;
    let password=loginForm.value.password;
  let users= this.dataStorageService.getUser();
  users.forEach((user)=>{
    if(user.email==email && user.password==password){
      this.isLogin=true
        this.router.navigate(['profile',user.email,false])

    }
  })
if(!this.isLogin){
  this._snackBar.open('Invalid Email or Password','Ok',{
    duration:2000
  })
}
  


  }
}
