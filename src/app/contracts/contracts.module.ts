import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  ]
})
export class ContractsModule { }
