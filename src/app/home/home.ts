import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ FormsModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {

  title = 'My first SPA'
  lang = true // true = english, false = spanish

  usuario1 = ""
  usuario2 = ""

  login(usuario: string) {
    this.usuario2 = usuario
  }

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
