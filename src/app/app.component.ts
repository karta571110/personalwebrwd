import { Component } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  template: `
    <head>
      <title>{{titleService.title | async}}</title>
    </head>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kfctest';
  constructor(public titleService: TitleService) { }
}
