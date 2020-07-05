import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../registration/sharedService/DataStorageService';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email:string;
  gender:string;
  firstName:string;
  lastName:string;
  updateMode:boolean=false;
  user:any
  constructor(private activeRoute:ActivatedRoute,private dataStorage:DataStorageService,private _snackBar: MatSnackBar) {
    let user=this.activeRoute.snapshot.data['userDetails'];
    this.user=user;
   this.updateMode= this.activeRoute.snapshot.params.updateMode=='true';
   if(this.updateMode){
    this.email=user.email;
    this.gender=user.gender;
    this.firstName=user.firstName;
    this.lastName=user.lastName;
   }
    
   }

  ngOnInit() {

  }

  
  saveClick(profileForm:NgForm){
    

     let UserModel={
       email:profileForm.value.email,
       firstName:profileForm.value.firstName,
       lastName:profileForm.value.lastName,
       gender:profileForm.value.gender,
     }

     this.dataStorage.saveUser(UserModel,(message)=>{
     
      this._snackBar.open(message,'Ok',{
        duration:2000
      })

     })


  }

  updateClick(profileForm){
    
    let UserModel={
      email:profileForm.value.email,
      firstName:profileForm.value.firstName,
      lastName:profileForm.value.lastName,
      gender:profileForm.value.gender,
    }
    this.dataStorage.updateUserByEmailInAllUser(UserModel,(message)=>{
      this._snackBar.open(message,'Ok',{
        duration:2000
      })

    })

  }

}
