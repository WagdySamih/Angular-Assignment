import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UsersManageRoutingModule } from './users-manage-routing.module';

import { UsersManageComponent } from './containers/users-manage.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [UsersManageComponent, UserFormComponent],
  imports: [CommonModule, SharedModule, RouterModule, UsersManageRoutingModule],
  exports: [UsersManageComponent],
})
export class UsersManageModule {}
