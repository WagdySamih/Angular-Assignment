import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { UsersModule } from '@modules/users/users.module';
import { UsersManageModule } from '@modules/users-manage/users-manage.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    UsersModule,
    UsersManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
