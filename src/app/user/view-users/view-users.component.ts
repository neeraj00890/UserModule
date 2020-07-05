import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../registration/sharedService/DataStorageService';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  allusers:any
  constructor(private activeRoute:ActivatedRoute,private dataStorageService:DataStorageService,
    private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,
    private router:Router) {
    let allusers=this.activeRoute.snapshot.data['allUsers'];
    this.allusers=allusers;
    console.log(allusers);
    iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/delete.svg'))
    iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/edit.svg'))
  }

  ngOnInit() {
  }
  deleteUser(user){
    this.dataStorageService.deleteUserbyEmail(user.email);
    window.parent.location.reload();
  }
  updateUser(user){
    this.router.navigate(['profile',user.email,true])
  }

}
