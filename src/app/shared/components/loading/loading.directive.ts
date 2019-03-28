import {
  Directive,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  ViewContainerRef } from '@angular/core';

import { IconInlineComponent } from 'src/app/icons/icon-inline/icon-inline.component';
import { LoaderInlineComponent } from 'src/app/shared/components/loader-inline/loader-inline.component';

@Directive({
  selector: '[fireLoading]'
})
export class LoadingDirective implements AfterViewInit, OnDestroy, OnChanges {

  @Input() fireLoading: boolean;
  displayProperty: string;

  @ContentChildren(IconInlineComponent, {read: ElementRef, descendants: true}) iconsInside: QueryList<ElementRef>;
  contentCmpRef: any;

  constructor(
    private _el: ElementRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges() {
    this.startLoading();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

  startLoading() {

    if (this.fireLoading) {
      this.iconsInside.forEach((item) => {
        item.nativeElement.style.display = 'none';
      });

      setTimeout(() => {
        let componentFactory: any;
        componentFactory = this._componentFactoryResolver.resolveComponentFactory(LoaderInlineComponent);
        this.contentCmpRef = this._viewContainerRef.createComponent(componentFactory);
        this.contentCmpRef.instance.iconName = 'loading_md20';
        const firstChild = this._el.nativeElement.childNodes[0];
        this._el.nativeElement.insertBefore(this.contentCmpRef.location.nativeElement, firstChild);
        this._el.nativeElement.disabled = true;
      });

    } else {
      this._el.nativeElement.disabled = false;
      if (this.contentCmpRef) {
        this.contentCmpRef.location.nativeElement.style.display = 'none';
      }
      if (this.iconsInside) {
        this.iconsInside.forEach((item) => {
          item.nativeElement.style.display = 'inline-block';
        });
      }
    }

  }

}
