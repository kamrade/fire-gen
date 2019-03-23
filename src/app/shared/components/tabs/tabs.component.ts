import { Component, Input, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';

import {TabItem} from 'src/app/shared/models/tab-item.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {

  @Input() tabItems: TabItem[];
  @ViewChild('fireTabs') fireTabs: ElementRef<any>;

  x: number = 0;
  width: number = 0;
  parentX: number = 0;
  parentWidth: number = 0;

  ngAfterViewInit() {
    let parentSize = this.fireTabs.nativeElement.getBoundingClientRect();
    this.parentX = parentSize.x;
    this.parentWidth = parentSize.width;
  }

  // FIRE ON WINDOW SCROLL
  getActiveTabSize(size) {
    const parentRect = this.fireTabs.nativeElement.getBoundingClientRect();
    this.parentX = parentRect.x;
    this.parentWidth = parentRect.width
    this.x = size.x;
    this.width = size.width;
  }

}
