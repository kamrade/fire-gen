import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { listOfData } from './list-of-data';

@Component({
  selector: 'fire-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.scss']
})
export class ContractsPageComponent implements OnInit {

  demoLoading = false;
  listOfData = listOfData;

  value: '';
  @ViewChild('scroll') scrollElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  get itemsRatio(): number {
    const $scroll = this.scrollElementRef.nativeElement;
    return $scroll.offsetWidth;
  }

  setLoading() {
    this.demoLoading = true;
    setTimeout(() => {
      this.demoLoading = false;
    }, 1000);
  }

}
