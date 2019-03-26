import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import {Customer} from 'src/app/customers/models/customer.model';
import {CustomersService} from 'src/app/customers/services/customers.service';

@Component({
  selector: 'fire-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, OnChanges {

  @Input() customer: Customer;
  @Input() globalEdit: boolean;
  isEditMode = false;
  isRemoving = false;

  @ViewChild('focusFirst') focusFirst: ElementRef<any>;

  @Output() editMode: EventEmitter<any> = new EventEmitter<any>();

  constructor(public customersService: CustomersService) { }

  ngOnInit() {}

  ngOnChanges() {
    // console.log(this.focusFirst);
  }

  toggleMode() {
    if (this.isEditMode) {
      this.update();
      this.isEditMode = !this.isEditMode;
      this.editMode.emit(this.isEditMode);
    } else {
      if (!this.globalEdit) {
        this.isEditMode = !this.isEditMode;
        this.editMode.emit(this.isEditMode);

        setTimeout(() => this.focusFirst.nativeElement.select());

      }
    }

  }

  update() {
    console.log('::: update');
  }

  reset() {
    this.toggleMode();
    console.log('::: reset');
  }

  remove() {
    this.isRemoving = true;
    this.customersService.deleteCustomer(this.customer.id)
      .subscribe((res) => {
        this.isRemoving = false;
        console.log(res);
      });
  }

}
