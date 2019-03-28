import { Directive, ElementRef, OnInit, Input } from '@angular/core';

type FireSize = "sm" | "lg" | "xl" | "";

@Directive({
  selector: '[fireButton]'
})
export class ButtonDirective implements OnInit {

  @Input() fireTheme: string;
  @Input() outline = false;
  @Input() fireSize: FireSize = "";
  @Input() fireShape: string;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
    const buttonClassList = ['btn'];

    if (this.fireSize) {
      switch(this.fireSize) {
        case 'sm':
          buttonClassList.push('btn-sm');
          break;
        case 'lg':
          buttonClassList.push('btn-lg');
          break;
        case 'xl':
          buttonClassList.push('btn-xl');
          break;
        default:
          throw('Wrong size');
      }
    }

    if (this.fireTheme) {
      buttonClassList.push( this.setTheme() );
    }

    switch (this.fireShape) {
      case 'circled':
        buttonClassList.push('btn-circled');
        break;
      case 'squared':
        buttonClassList.push('btn-squared');
        break;
      case 'rounded':
        buttonClassList.push('btn-rounded');
        break;
      default:
        break;
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
      case 'danger':
        className += 'danger';
        break;
      case 'dashed':
        className += 'dashed';
        break;
      default:
        break;

    }

    return className;
  }

}
