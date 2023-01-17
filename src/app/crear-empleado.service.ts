import {Injectable} from '@angular/core';
import {Empleado} from './app-empleados/empleado.model';
import {VentanaEmergenteService} from './ventana-emergente.service';


@Injectable({
  providedIn: 'root'
})
export class CrearEmpleadoService {
  /**
   *
   */
  constructor(private servicioVentanaEmergente: VentanaEmergenteService) {


  }

  empleados: Empleado[] = [
    new Empleado('Danel', 'Caballero', 'Director', 10000),
    new Empleado('Eliany', 'Alfonso', 'Secretaria', 5000),
    new Empleado('Tony', 'Stark', 'Subdirector', 8000),
    new Empleado('Steve', 'Rogers', 'Capitan', 1000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }
}
