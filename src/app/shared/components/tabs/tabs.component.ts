import { Component, Input } from '@angular/core';

import {TabItem} from 'src/app/shared/models/tab-item.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input() tabItems: TabItem[]
  activeTabPos: number = 0;
  activeTabWidth: number = 0;

}
