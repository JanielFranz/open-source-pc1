import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardListComponent} from "./biographies/components/card-list/card-list.component";
import {IndexComponent} from "./public/components/index/index.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upc2402si729pc1wx55u201912668';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
