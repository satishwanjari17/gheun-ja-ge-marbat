import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MessangerComponent } from "./messanger/messanger.component";


const routes: Routes = [{
  path : "",
  component : LoginComponent
},{
  path : "dashboard",
  component : DashboardComponent
},{
    path : "messanger",
    component : MessangerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
