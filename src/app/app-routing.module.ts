import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrpcollectionComponent } from './grpcollection/grpcollection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomepageComponent},
  {path:'grp',component:GrpcollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
