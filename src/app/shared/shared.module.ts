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
import { ButtonDirective } from './components/button/button.directive';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { LoadingDirective } from './components/loading/loading.directive';
import { IconInlineComponent } from 'src/app/icons/icon-inline/icon-inline.component';
import { LoaderInlineComponent } from './components/loader-inline/loader-inline.component';
import { TableComponent } from './components/table/table.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormLabelComponent } from './components/form-label/form-label.component';
import { FormFeedbackComponent } from './components/form-feedback/form-feedback.component';

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
    InputGroupComponent,
    ButtonDirective,
    ButtonGroupComponent,
    LoadingDirective,
    LoaderInlineComponent,
    TableComponent,
    FormControlComponent,
    FormLabelComponent,
    FormFeedbackComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconsModule,
  ],
  entryComponents: [
    TooltipComponent,
    LoaderInlineComponent
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
    ButtonDirective,
    ButtonGroupComponent,
    LoadingDirective,
    LoaderInlineComponent,
    TableComponent,
    FormControlComponent,
    FormLabelComponent,
    FormFeedbackComponent,
  ]
})
export class SharedModule { }
