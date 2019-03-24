import { Component, OnInit, Input } from '@angular/core';

import {Customer} from 'src/app/customers/models/customer.model';
import {CustomersService} from 'src/app/customers/services/customers.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  @Input() customer: Customer;
  isEditMode = false;

  constructor(public customersService: CustomersService) { }

  ngOnInit() {
  }

  toggleMode() {
    if (this.isEditMode) {
      this.update();
    }
    this.isEditMode = !this.isEditMode;
  }

  update() {
    console.log('::: update');
  }

  remove() {
    this.customersService.deleteCustomer(this.customer.id)
      .subscribe((res) => console.log(res));
  }

}
