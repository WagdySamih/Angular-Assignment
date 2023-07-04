import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './dashboard/containers/dashboard.component';
import { UserListComponent } from './dashboard/components/user-list/user-list.component';
import { UserCardComponent } from './dashboard/components/user-card/user-card.component';

@NgModule({
  declarations: [DashboardComponent, UserListComponent, UserCardComponent],
  imports: [CommonModule, SharedModule],
})
export class ModulesModule {}
