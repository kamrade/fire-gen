import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const routes: Routes = [{
  path: '',
  component: DashboardPageComponent,
  pathMatch: 'full'
}]

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
