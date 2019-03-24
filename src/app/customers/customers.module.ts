import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {IconsModule} from 'src/app/icons/icons.module';

import { CustomersPageComponent } from './components/customers-page/customers-page.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

const routes: Routes = [{
  path: '',
  component: CustomersPageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    CustomersPageComponent,
    CustomersListComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    IconsModule,
    FormsModule
  ]
})
export class CustomersModule { }
