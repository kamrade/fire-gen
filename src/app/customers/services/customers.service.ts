import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import uuidv1 from 'uuid/v1';

import {Customer} from 'src/app/customers/models/customer.model';
import {customers} from 'src/app/customers/const/initial-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers: Customer[] = customers;


  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }

  public addCustomer(newCustomer: Customer) {
    newCustomer.id = uuidv1();

    this.customers.push({
      name: 'Processing…',
      turnover: 'Processing…',
      currency: 'Processing…',
      id: uuidv1()
    });

    return of(0)
      .pipe(delay(2500))
      .pipe(
        map((res) => {
          this.customers.pop();
          this.customers.push(newCustomer);
          return res;
        })
      );

  }

  public deleteCustomer(id) {

    return of(0)
      .pipe(delay(1500))
      .pipe(
        map(res => {
          let indexToRemove;
          this.customers.forEach((item, i) => {
            if (item.id === id) {
              indexToRemove = i;
              return;
            }
          });

          this.customers.splice(indexToRemove, 1);
          console.log(this.customers);
          return res;
        })
      );


  }

}
