import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fireTextField]'
})
export class TextFieldDirective implements OnInit {

  @Input() fireSize: string;
  @Input() fireGhost: boolean = false;

  constructor(private _el: ElementRef) {}

  ngOnInit() {
    let classList = this.generateClassList();
    this._el.nativeElement.classList.add(...classList);
  }

  generateClassList() {

    let classList = ['form-control'];

    switch (this.fireSize) {
      case 'sm':
        classList.push('form-control-sm');
        break;
      case 'lg':
        classList.push('form-control-lg');
      default:
        break;
    }

    if (this.fireGhost) {
      classList.push('form-control-ghost');
    }

    return classList;

  }

}
