import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1.spa');
}
