import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { UsersComponent } from './users/containers/users.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserCardComponent } from './users/components/user-card/user-card.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserCardComponent],
  imports: [CommonModule, SharedModule],
})
export class ModulesModule {}
