import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    if(!JSON.parse(localStorage.getItem('UserDatabase'))){
       let UserModel={
        email:'admin@gmail.com',
        password:'admin',
        gender:'male',
        firstName:'admin',
        lastName:'admin',
      }
      let userDataBase={};
      userDataBase['users']=[UserModel];
       localStorage.setItem('UserDatabase',JSON.stringify(userDataBase))
    }
    }

    
  title = 'Assignment';
}
