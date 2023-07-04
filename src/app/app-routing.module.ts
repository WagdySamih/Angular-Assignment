import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '@app/modules/users/containers/users.component';

const routes: Routes = [
  { path: 'dashboard/users', component: UsersComponent },
  { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
