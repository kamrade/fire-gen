import { Component } from '@angular/core';

import {TabItem} from 'src/app/shared/models/tab-item.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  tabItems: TabItem[] = [{
    title: 'Customers',
    value: 'customers',
    id: '1'
  }, {
    title: 'Contracts',
    value: 'contracts',
    id: '2'
  }];

}
