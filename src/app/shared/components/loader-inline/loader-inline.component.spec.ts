import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderInlineComponent } from './loader-inline.component';

describe('LoaderInlineComponent', () => {
  let component: LoaderInlineComponent;
  let fixture: ComponentFixture<LoaderInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
