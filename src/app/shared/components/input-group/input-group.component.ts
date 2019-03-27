import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'fire-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

  @Input() fireAddonBefore: string | TemplateRef<any>;
  addonBefore = false;
  textBefore = false;
  @Input() fireAddonAfter: string | TemplateRef<any>;
  addonAfter = false;
  textAfter = false;

  @Input() fireSuffix: TemplateRef<any>;
  @Input() firePrefix: TemplateRef<any>;

  liveAddonBeforeTemplate: TemplateRef<any>;
  liveAddonAfterTemplate: TemplateRef<any>;
  liveSuffixTemplate: TemplateRef<any>;
  livePrefixTemplate: TemplateRef<any>;

  @ContentChild('addonBeforeTemplate') addonBeforeTemplate: TemplateRef<any>;
  @ContentChild('addonAfterTemplate') addonAfterTemplate: TemplateRef<any>;
  @ContentChild('suffixTemplate') suffixTemplate: TemplateRef<any>;
  @ContentChild('prefixTemplate') prefixTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {

    if (this.suffixTemplate) {
      this.liveSuffixTemplate = this.suffixTemplate;
    }
    if (this.prefixTemplate) {
      this.livePrefixTemplate = this.prefixTemplate;
    }

    //
    // TODO:
    // Здесь на самом деле проще сделать так:
    // Проверяем, если в компонент передан ng-template с именем addonAfter(Before)TEmplate
    // то одноименный Input игнорируем.
    //

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
