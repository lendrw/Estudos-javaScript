import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teste',
  standalone: true,
})
export class TestePipe implements PipeTransform {

  transform(texto:string): unknown {
    return texto + 'Leandro';
  }

}
