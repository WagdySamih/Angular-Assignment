import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '@modules/users/containers/users.component';
import { UsersManageComponent } from '@modules/users-manage/containers/users-manage.component';

export const routes: Routes = [
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/users/:userId', component: UsersManageComponent },
  { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/users' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
