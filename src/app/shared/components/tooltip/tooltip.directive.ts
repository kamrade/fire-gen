import {
  Directive, HostListener, OnInit, Input,
  ElementRef, ComponentFactoryResolver,
  ViewContainerRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ContentOptions } from './tooltip.model';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input() tooltipText: string;
  @Input() tooltipStyle: string = 'dark';

  @Input() showOnClick   = false;
  @Input() autoShowHide  = true;

  private isClear: boolean = true;
  contentCmpRef: any;

  constructor(
    private _el: ElementRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  @HostListener('mouseover', ['$event']) onMouseHover(event: MouseEvent) {
    if (!this.autoShowHide || this.showOnClick) {
      return;
    }
    if (!this.isClear) {
      return;
    }
    this.buildTooltip(event);
  }

  @HostListener('mouseleave') hideTooltip() {
    if (this.contentCmpRef) {
      this.contentCmpRef.destroy(); //уничтожаем сам компонент
      this.isClear = true;
    }
  }

  private buildTooltip(event: MouseEvent) {
    event;
    let options: ContentOptions = {} as ContentOptions;
    const elementViewport = this._el.nativeElement.getBoundingClientRect();

    options = {
      x: elementViewport.x,
      y: elementViewport.y,
      height: elementViewport.height,
      width: elementViewport.width,
      content: this.tooltipText,
      tooltipStyle: this.tooltipStyle
    };

    this.showTooltip(options);
  }

  private showTooltip(options: ContentOptions) {
    let componentFactory: any;
    componentFactory = this._componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    this.contentCmpRef = this._viewContainerRef.createComponent(componentFactory);
    this._document.querySelector('body').appendChild(this.contentCmpRef.location.nativeElement);
    this.contentCmpRef.instance.options = options;
    this.isClear = false;
  }

}
