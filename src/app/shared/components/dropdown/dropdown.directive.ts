import { Directive, HostListener, OnInit, Input, Output, EventEmitter,
  ElementRef, ComponentFactoryResolver, ViewContainerRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { DropdownOptions, SelectionItemElement } from './dropdown.model';
import { DropdownComponent } from './dropdown.component';

@Directive({
  selector: '[fireDropdown]',
})
export class DropdownDirective implements OnInit {

  @Input()  dropdownContent: SelectionItemElement[];
  @Output() choose = new EventEmitter();
  private isClear: boolean = true;
  contentCmpRef: any;

  constructor(
    private _el: ElementRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private _document: any
  ) {}

  ngOnInit() {}

  @HostListener('focus', ['$event']) onMouseHover(event: MouseEvent) {
    // console.log('::: dropdown:focus');
    if (!this.isClear) {
      return;
    }
    this.buildDropdown(event);
  }

  @HostListener('blur') obBlurHandler() { // event
    // console.log('::: dropdown:blur');
    let self = this;
    setTimeout(function() {
      self.hideDropdown();
    }, 100);
  }

  // @HostListener('mouseleave') hideDropdown() {
  //   console.log('::: dropdown:out');
  //   if (this.contentCmpRef) {
  //     this.contentCmpRef.destroy();
  //     this.isClear = true;
  //   }
  // }

  private buildDropdown(event: MouseEvent) {
    event;
    let options: DropdownOptions = {} as DropdownOptions;
    const elementViewport = this._el.nativeElement.getBoundingClientRect();

    options = {
      x: elementViewport.x,
      y: elementViewport.y,
      height: elementViewport.height,
      width: elementViewport.width,
      content: this.dropdownContent
    };

    this.showDropdown(options);
  }

  hideDropdown() {
    if (this.contentCmpRef) {
      this.contentCmpRef.destroy();
      this.isClear = true;
    }
  }

  private showDropdown(options: DropdownOptions) {
    let componentFactory: any;
    componentFactory = this._componentFactoryResolver.resolveComponentFactory(DropdownComponent);
    this.contentCmpRef = this._viewContainerRef.createComponent(componentFactory);
    this._document.querySelector('body').appendChild(this.contentCmpRef.location.nativeElement);

    this.contentCmpRef.instance.options = options;
    this.contentCmpRef.instance.choise.subscribe(event => {
      this._el.nativeElement.value = event.title;
      this.choose.emit(event);
      this.hideDropdown();
    })
    // this.contentCmpRef.instance.dropdownContent = this.dropdownContent;
    this.isClear = false;
  }

}
