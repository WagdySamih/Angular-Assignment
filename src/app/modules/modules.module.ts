import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './users/containers/dashboard.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserCardComponent } from './users/components/user-card/user-card.component';

@NgModule({
  declarations: [DashboardComponent, UserListComponent, UserCardComponent],
  imports: [CommonModule, SharedModule],
})
export class ModulesModule {}
