import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fire-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() fireData: any;

  constructor() { }

  ngOnInit() {
    console.log(this.fireData);
  }

}
