import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VentanaEmergenteService } from '../ventana-emergente.service';
import { Empleado } from '../app-empleados/empleado.model';


@Component({
  selector: 'app-caracteristica-empleado-c',
  templateUrl: './caracteristica-empleado-c.component.html',
  styleUrls: ['./caracteristica-empleado-c.component.css'],
})
export class CaracteristicaEmpleadoCComponent implements OnInit {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  

  ngOnInit(): void {}
  agregaCaracteristica(value: string) {
    this.caracteristicasEmpleados.emit(value);
   
  }
}
