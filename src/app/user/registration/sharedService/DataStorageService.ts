import { Injectable} from '@angular/core';

@Injectable(

)
export class DataStorageService{

    constructor(){
        if(!localStorage.getItem("UserDatabase")){
            localStorage.setItem("UserDatabase",JSON.stringify({}));
          }
         
    }
    storeUser(userModel,cb){
        let userDataBase= JSON.parse(localStorage.getItem('UserDatabase'));
        if(!userDataBase['users']){
        userDataBase['users']=[userModel];
        }
        else{
           let user= userDataBase['users'].find((usr)=>{
                return usr.email ==userModel.email
            });

          if(user){
              cb('User exists')
              return;
          }
        userDataBase['users'].push(userModel);

        }

    localStorage.setItem("UserDatabase",JSON.stringify(userDataBase));
         cb('Success');
    }
    getUser(){
        return JSON.parse(localStorage.getItem("UserDatabase"))['users']; 
    }

    getUserByEmail(email){
        let users = JSON.parse(localStorage.getItem("UserDatabase"))['users']; 
           let user= users.find((user)=>{
              return  user.email==email
            })
            return user;
    }

    getUserByEmailFromAllUsersInSession(email){
        let users = JSON.parse(localStorage.getItem("UserDatabase"))['allUsers']; 
        let user= users.find((user)=>{
           return  user.email==email;
         })
         return user;
    }

    getAllUser(){
        return JSON.parse(localStorage.getItem("UserDatabase"))['allUsers']; 
    }

    updateUserByEmailInAllUser(userModel,cb){

        let allUsers = JSON.parse(localStorage.getItem("UserDatabase"))['allUsers']; 
        allUsers.forEach((user)=>{
           if(user.email==userModel.email){
            user.firstName=userModel.firstName;
            user.lastName=userModel.lastName;
            user.gender=userModel.gender;
           }
        })
           let UpdatedDatabase={};
           UpdatedDatabase['users']= JSON.parse(localStorage.getItem("UserDatabase"))['users']
           UpdatedDatabase['allUsers']=allUsers;
           localStorage.setItem('UserDatabase',JSON.stringify(UpdatedDatabase));
           cb('User Updated Succesfully');
      

    }

    deleteUserbyEmail(email){
        let allUsers=JSON.parse(localStorage.getItem("UserDatabase"))['allUsers'];
       let updatedAllUserList = allUsers.filter((user)=>{
            return user.email!= email;
        })
        let UpdatedDatabase={};
        UpdatedDatabase['users']= JSON.parse(localStorage.getItem("UserDatabase"))['users']
        UpdatedDatabase['allUsers']=updatedAllUserList;
        localStorage.setItem('UserDatabase',JSON.stringify(UpdatedDatabase));

    }

    saveUser(userModel,cb){
        let database=JSON.parse(localStorage.getItem("UserDatabase"));
        if(!database.allUsers){
             database['allUsers']=[userModel];
           localStorage.setItem('UserDatabase',JSON.stringify(database));
        }
        else{
           let existingUser = database.allUsers.find((user)=>{
                    return user.email==userModel.email
            })
            if(existingUser){
                cb('User Already exists with this email');
                return;
            }
            database.allUsers.push(userModel)
            localStorage.setItem('UserDatabase',JSON.stringify(database));
        }    
        cb('Added');
    }
  
   
}
