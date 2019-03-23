import { Component, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import {TabItem} from 'src/app/shared/models/tab-item.model';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {

  @Input() tabItem: TabItem;

}
