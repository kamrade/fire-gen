import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './components/customers-page/customers-page.component';

const routes: Routes = [{
  path: '',
  component: CustomersPageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [CustomersPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomersModule { }
