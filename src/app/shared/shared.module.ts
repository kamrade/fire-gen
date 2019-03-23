import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {IconsModule} from 'src/app/icons/icons.module';

import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabItemComponent } from './components/tabs/tab-item/tab-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent
  ]
})
export class SharedModule { }
