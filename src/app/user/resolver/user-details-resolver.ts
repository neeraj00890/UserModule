import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataStorageService } from '../registration/sharedService/DataStorageService';

@Injectable(
)
export class UserDetailsResolever implements Resolve<any>{

    eventData:any
    constructor(private dataStorageService:DataStorageService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
         
        let email=route.params.email;
       if(route.params.updateMode=='true'){

           let usr=this.dataStorageService.getUserByEmailFromAllUsersInSession(email);
           console.log(usr);
           return usr;
       }
      let user = this.dataStorageService.getUserByEmail(email)
        return user;
    }
    
    
}
