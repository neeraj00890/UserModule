import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataStorageService } from '../registration/sharedService/DataStorageService';

@Injectable(
)
export class AllUserResolver implements Resolve<any>{

    eventData:any
    constructor(private dataStorageService:DataStorageService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
         
        
      let allUseruser = this.dataStorageService.getAllUser()
        return allUseruser;
    }
    
    
}
