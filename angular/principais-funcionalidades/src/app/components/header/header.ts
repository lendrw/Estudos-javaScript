import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tituloHeader = 'Youtube';

  valorInput = 'Valor inicial';

  aplicarClasse = false;

  estiloCor = 'orange';

  atualizarTitulo() {
    this.estiloCor = 'red';
    this.aplicarClasse = !this.aplicarClasse;
    console.log(this.valorInput);
  }
}
