import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInlineComponent } from './icon-inline.component';

describe('IconInlineComponent', () => {
  let component: IconInlineComponent;
  let fixture: ComponentFixture<IconInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
