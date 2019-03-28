import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'fire-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.scss']
})
export class ContractsPageComponent implements OnInit {

  value: '';
  @ViewChild('scroll') scrollElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  get itemsRatio(): number {
    const $scroll = this.scrollElementRef.nativeElement;
    return $scroll.offsetWidth;
  }

}
