import { Component } from '@angular/core';
import { ControllerService } from './controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  data = this.controller.getItems();
  constructor(private controller: ControllerService) { }

}
