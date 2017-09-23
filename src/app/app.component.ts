import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }

  expandMenu(event:any){
    event.target.classList.add('oppenned');
     event.stopPropagation();
   }
   closeMenu(event:any){
       var x = document.querySelectorAll('.open')
       x[0].classList.remove('oppenned');
      event.stopPropagation();
    }

}
