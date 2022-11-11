import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListFreelancersComponent} from "./list-freelancers/list-freelancers.component";
import {DetailFreelancerComponent} from "./detail-freelancer/detail-freelancer.component";
import {AddFreelancerComponent} from "./add-freelancer/add-freelancer.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-freelancers',
    pathMatch: 'full'
  },
  {
    path: 'list-freelancers',
    component: ListFreelancersComponent
  },
  {
    path: 'freelancer/:id',
    component: DetailFreelancerComponent
  },
  {
    path: 'add-freelancer',
    component: AddFreelancerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
