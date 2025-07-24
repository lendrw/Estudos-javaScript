import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './components/comp-1/comp-1.component';
import { Comp2Component } from './components/comp-2/comp-2.component';
import { TestePipe } from './pipes/teste.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, TestePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meu-projeto-19';
}
