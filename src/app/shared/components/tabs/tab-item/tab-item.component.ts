import { Component, Input, ViewChild, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { RouterLinkActive, Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { fromEvent, interval, timer } from 'rxjs';
import { throttle, debounce } from 'rxjs/operators';

import {TabItem} from 'src/app/shared/models/tab-item.model';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent {

  resize: any;

  @Input() tabItem: TabItem;
  @Output() size: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(RouterLinkActive, { read: ElementRef }) activeRouteEl: ElementRef;

  constructor(private router: Router) {

    this.resize = fromEvent(window, 'resize');
    this.resize
      .pipe(throttle( val => interval(200) ))
      .pipe(debounce(() => timer(200)))
      .subscribe(event => this.setParameters() );

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setParameters();
      }
    });

  }

  // Set width and position for underline
  // for active router link
  setParameters() {
    const self = this;

    setTimeout(function() {
      const el = self.activeRouteEl.nativeElement;
      if (el.classList.contains('active-link')) {
        let size = el.getBoundingClientRect();
        self.size.emit({ x: size.x, width: size.width });
      }
    });
  }

}
