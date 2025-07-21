import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './components/content/content';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Content, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'principais-funcionalidades';
}
