import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'src/app/shared/shared.module';
import {IconsModule} from 'src/app/icons/icons.module';

import { ClientsPageComponent } from './clients-page.component';
import { ClientListComponent } from 'src/app/clients/components/client-list/client-list.component';
import { ClientFormComponent } from 'src/app/clients/components/client-form/client-form.component';

describe('ClientsPageComponent', () => {
  let component: ClientsPageComponent;
  let fixture: ComponentFixture<ClientsPageComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ClientsPageComponent, ClientListComponent, ClientFormComponent ],
      imports: [SharedModule, IconsModule]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
