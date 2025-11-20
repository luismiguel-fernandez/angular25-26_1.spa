import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles: `
    .capsula {
      border: solid thin black;
      border-radius: 3px;
      background-color: lightyellow;
    }
  `,
})
export class NavBar {

}
