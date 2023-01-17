import { Component, Input } from '@angular/core';
import { Empleado } from '../app-empleados/empleado.model';
import { VentanaEmergenteService } from '../ventana-emergente.service';
@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css'],
})
export class EmpleadoHijoCComponent {
  constructor(private miServicio:VentanaEmergenteService){}
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  arrayCaracteristicas=[''];
  agregaCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
    this.miServicio.Mensaje("Ha sido agregada una nueva caracteristica: "+nuevaCaracteristica+" al empleado: "+ this.empleadoDeLista.nombre)
  }
  
}

