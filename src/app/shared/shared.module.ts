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
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './components/tooltip/tooltip.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent,
    BoardComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    BoardFooterComponent,
    BoardTitleComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  entryComponents: [
    TooltipComponent
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    TabItemComponent,
    BoardComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    BoardFooterComponent,
    BoardTitleComponent,
    TooltipComponent,
    TooltipDirective,
  ]
})
export class SharedModule { }
