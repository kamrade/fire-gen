import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { EnterLeaveOpacityDelayAnimation } from 'src/app/animations/';

import { ContentOptions } from './tooltip.model';

@Component({
  selector: 'app-tooltip',
  host: {
    '[style.display]': "'block'",
    '[style.overflow]': "'hidden'",
    '[@enterLeaveAnimation]': ''
  },
  animations: EnterLeaveOpacityDelayAnimation.animations,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  @ViewChild('tooltip') el:ElementRef;

  private _options: ContentOptions;

  set options(op: ContentOptions) {
    if (op) {
      this._options = op;
    }
  }

  get options(): ContentOptions {
    return this._options;
  }

  constructor(
    private elRef: ElementRef,
    private rd: Renderer2
  ) {}

}
