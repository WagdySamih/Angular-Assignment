import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/containers/users.component';
import { UsersManageComponent } from './users-manage/containers/users-manage.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':userId', component: UsersManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
