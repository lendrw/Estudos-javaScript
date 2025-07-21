import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule],
  templateUrl: './componente04.html',
  styleUrl: './componente04.css',
})
export class Componente04 {
  exibir: boolean = true;

  acao(){
    this.exibir = !this.exibir;
  }
}
