import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/users',
    loadChildren: () =>
      import('@modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard/users/:userId',
    loadChildren: () =>
      import('@modules/users-manage/users-manage.module').then(
        (m) => m.UsersManageModule
      ),
  },
  { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
