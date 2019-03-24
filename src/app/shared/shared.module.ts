import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {IconsModule} from 'src/app/icons/icons.module';

import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabItemComponent } from './components/tabs/tab-item/tab-item.component';
import { BoardComponent } from './components/board/board.component';
import { BoardHeaderComponent } from './components/board/board-header/board-header.component';
import { BoardBodyComponent } from './components/board/board-body/board-body.component';
import { BoardFooterComponent } from './components/board/board-footer/board-footer.component';
import { BoardTitleComponent } from './components/board/board-title/board-title.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent,
    BoardComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    BoardFooterComponent,
    BoardTitleComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent,
    BoardComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    BoardFooterComponent,
    BoardTitleComponent
  ]
})
export class SharedModule { }
