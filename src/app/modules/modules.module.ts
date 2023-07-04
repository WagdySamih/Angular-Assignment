import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { UsersComponent } from './users/containers/users.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserCardComponent } from './users/components/user-card/user-card.component';
import { UsersManageComponent } from './users-manage/containers/users-manage.component';
import { UserFormComponent } from './users-manage/components/user-form/user-form.component';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserCardComponent,
    UsersManageComponent,
    UserFormComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
})
export class ModulesModule {}
