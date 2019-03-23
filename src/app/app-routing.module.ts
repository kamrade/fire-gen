import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
  pathMatch: 'full'
}, {
  path: 'customers',
  loadChildren: './customers/customers.module#CustomersModule'
}, {
  path: 'contracts',
  loadChildren: './contracts/contracts.module#ContractsModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
