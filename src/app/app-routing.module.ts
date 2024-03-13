import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ErrorComponent } from './error/error.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {
    path:'',component:ListUserComponent
  },
  {
    path:'Add',component:AddUserComponent
  },
  {
    path:'List',component:ListUserComponent
  },
  {
    path:'Edit',component:EditUserComponent
  },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
