import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateMalComponent} from "./mal/create-mal/create-mal.component";
import {CreateMmlComponent} from "./mml/create-mml/create-mml.component";
import {UpdateMalComponent} from "./mal/update-mal/update-mal.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'mal/create', component: CreateMalComponent},
  { path: 'mml/create', component: CreateMmlComponent},
  { path: 'mal/entry:id', component: UpdateMalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
