import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/users',
    loadChildren: () =>
      import('@modules/modules.module').then((m) => m.ModulesModule),
  },
  { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
