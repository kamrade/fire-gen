import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import icons from './icons/icons';

@Component({
  selector: 'app-icon-inline',
  templateUrl: './icon-inline.component.html',
  styleUrls: ['./icon-inline.component.scss']
})
export class IconInlineComponent implements OnInit {

  @Input()
  iconName: string;

  svg: SafeHtml;

  icons = icons;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.icons[this.iconName]) {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.icons[ this.iconName ]);
    } else {
      console.log('No such icon:', this.iconName);
    }
  }

}
