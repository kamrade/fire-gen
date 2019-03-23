import { Component } from '@angular/core';
import {navigation} from 'src/app/const/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fire-gen';
  navigation = navigation;
}
