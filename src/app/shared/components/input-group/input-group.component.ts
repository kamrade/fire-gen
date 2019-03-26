import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'fire-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  @Input() fireAddonBefore: any;
  addonBefore = false;
  textBefore = false;
  @Input() fireAddonAfter: any;
  addonAfter = false;
  textAfter = false;

  liveAddonBeforeTemplate: TemplateRef<any>;
  liveAddonAfterTemplate: TemplateRef<any>;

  @ContentChild('addonBeforeTemplate') addonBeforeTemplate: TemplateRef<any>;
  @ContentChild('addonAfterTemplate') addonAfterTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    if (typeof this.fireAddonBefore === 'object') {
      this.liveAddonBeforeTemplate = this.addonBeforeTemplate;
      this.addonBefore = true;
    } else {
      if (typeof this.fireAddonBefore === 'string' && this.fireAddonBefore.length > 0) {
        this.addonBefore = true;
        this.textBefore = true;
      }
    }

    if (typeof this.fireAddonAfter === 'object') {
      this.liveAddonAfterTemplate = this.addonAfterTemplate;
      this.addonAfter = true;
    } else {
      if (typeof this.fireAddonAfter === 'string' && this.fireAddonAfter.length > 0) {
        this.textAfter = true;
        this.addonAfter = true;
      }
    }

  }

}
