import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Customer} from 'src/app/customers/models/customer.model';
import {CustomersService} from 'src/app/customers/services/customers.service';

@Component({
  selector: 'fire-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {

  @Input() globalEdit: boolean;
  @Output() editMode: EventEmitter<any> = new EventEmitter<any>();
  inProcess = false;

  constructor(public customersService: CustomersService) { }

  addNewCustomer($event, f: NgForm) {
    $event.preventDefault();
    const formContent: Customer = f.value;

    this.inProcess = true;
    this.editMode.emit(true);

    this.customersService
      .addCustomer(formContent)
      .subscribe(res => {
        this.inProcess = false;
        this.editMode.emit(false);
        f.reset();
      });
  }

}
