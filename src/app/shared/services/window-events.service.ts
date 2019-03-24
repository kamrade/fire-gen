import { Injectable } from '@angular/core';

import { Observable, interval, fromEvent, timer } from 'rxjs';
import { throttle, debounce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowEventsService {

  onScroll$: Observable<Window | Event>;
  onResize$: Observable<Window | Event>;

  constructor() {

    this.onScroll$ = fromEvent(window, 'scroll')
      .pipe(throttle(() => interval(400)))
      .pipe(debounce(() => timer(400)));

    this.onResize$ = fromEvent(window, 'resize')
      .pipe(throttle(() => interval(400)))
      .pipe(debounce(() => timer(400)));

  }

  getResize() {
    return this.onResize$
  }

  getScroll() {
    return this.onScroll$;
  }

}
