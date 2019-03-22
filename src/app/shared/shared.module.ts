import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconsModule} from 'src/app/icons/icons.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
