import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContractsPageComponent } from './components/contracts-page/contracts-page.component';

const routes: Routes = [{
  path: '',
  component: ContractsPageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [ContractsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ]
})
export class ContractsModule { }
