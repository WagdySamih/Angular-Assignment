import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/modules/users/containers/dashboard.component';

const routes: Routes = [
  { path: 'dashboard/users', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
