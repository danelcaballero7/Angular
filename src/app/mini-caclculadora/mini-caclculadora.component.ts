import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-caclculadora',
  templateUrl: './mini-caclculadora.component.html',
  styleUrls: ['./mini-caclculadora.component.css'],
})
export class MiniCaclculadoraComponent {
  tittle = 'Mini Calculadora';
  numero1: string = '0';
  numero2: string = '0';
  resultado: number = 0;

  sumar(): void {
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }

  restar(): void {
    this.resultado = parseInt(this.numero1) - parseInt(this.numero2);
  }
}
