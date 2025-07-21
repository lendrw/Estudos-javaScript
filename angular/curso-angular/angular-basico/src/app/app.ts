import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01 } from './componente01/componente01';
import { Componente04 } from './componente04/componente04';
import { Componente05 } from './componente05/componente05';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01, Componente04, Componente05],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-basico');
}
