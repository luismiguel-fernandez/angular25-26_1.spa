import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {

  title = 'My first SPA'
  lang = true // true = english, false = spanish

  traducir() {
    if (this.lang) {
      this.title = 'Mi primera SPA'
      this.lang = false
    } else {
      this.title = 'My first SPA'
      this.lang = true
    }
  }

}
