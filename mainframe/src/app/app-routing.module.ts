import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { NaveComponent } from './nave/nave.component';

const routes: Routes = [
  {path:"",redirectTo: "/HomeComponent",pathMatch:'full'},{
  path:"home",
  component:HomeComponent
},
{
  path:"newcourses",
  component:AddproductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
