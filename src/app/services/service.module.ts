import { NgModule } from '@angular/core';

import {
      SettingsService,
      SharedService,
      SidebarService
      } from './service.index';

@NgModule({
  imports: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],

  declarations: []
})
export class ServiceModule { }
