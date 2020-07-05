import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';


const routes: Routes = [
    {
        path:'',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true,onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
