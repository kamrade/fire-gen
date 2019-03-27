import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[fireButton]'
})
export class ButtonDirective implements OnInit {

  @Input() fireTheme: string;
  @Input() outline = false;
  @Input() fireSize: string;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
    const buttonClassList = ['btn'];

    switch(this.fireSize) {
      case 'sm':
        buttonClassList.push('btn-sm');
        break;
      case 'lg':
        buttonClassList.push('btn-lg');
        break;
      default:
        break;
    }

    if (this.fireTheme) {
      buttonClassList.push( this.setTheme() );
    }

    this._el.nativeElement.classList.add(...buttonClassList);
  }


  setTheme() {
    let className = 'btn-';

    if (this.outline) {
      className += 'outline-'
    }

    switch (this.fireTheme) {
      case 'primary':
        className += 'primary';
        break;
      case 'secondary':
        className += 'secondary';
        break;
      case 'dark':
        className += 'dark';
        break;
      case 'success':
        className += 'success';
        break;
      default:
        break;

    }

    return className;
  }

}