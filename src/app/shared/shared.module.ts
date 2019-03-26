import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { TextFieldDirective } from './components/text-field-base/text-field.directive';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { InputGroupComponent } from './components/input-group/input-group.component';

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
    TooltipDirective,
    TextFieldDirective,
    FormGroupComponent,
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconsModule,
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
    TextFieldDirective,
    FormGroupComponent,
    InputGroupComponent,
  ]
})
export class SharedModule { }
