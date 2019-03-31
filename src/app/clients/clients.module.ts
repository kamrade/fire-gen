import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import {IconsModule} from 'src/app/icons/icons.module';

import { ClientsPageComponent } from './components/clients-page/clients-page.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

const routes: Routes = [{
  path: '',
  component: ClientsPageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    ClientsPageComponent,
    ClientListComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
