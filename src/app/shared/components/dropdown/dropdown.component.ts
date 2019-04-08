import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DropdownOptions, SelectionItemElement } from './dropdown.model';

@Component({
  selector: 'fire-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()  options: DropdownOptions;
  @Output() choise = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  choose(item: SelectionItemElement) {
    this.choise.emit(item);
  }

}
