import { Component } from '@angular/core';
import * as env from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  environment = env.getEnvValues();
  appUrl = this.environment?.SomeApp?.url|| null;
}
