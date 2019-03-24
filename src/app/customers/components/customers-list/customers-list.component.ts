import { Component, OnInit } from '@angular/core';

import {CustomersService} from 'src/app/customers/services/customers.service';
import {Customer} from 'src/app/customers/models/customer.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<Customer[]>;
  editMode = false;

  constructor(public customersService: CustomersService) { }

  ngOnInit() {
    this.customers$ = this.customersService.getCustomers();
  }

  editModeHandler($event) {
    this.editMode = $event;
  }

}
