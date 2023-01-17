import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { VentanaEmergenteService } from '../ventana-emergente.service';
import { CrearEmpleadoService } from '../crear-empleado.service';

@Component({
  selector: 'app-app-empleados',
  templateUrl: './app-empleados.component.html',
  styleUrls: ['./app-empleados.component.css'],
})
export class AppEmpleadosComponent implements OnInit {
  constructor(
    private miServicio: VentanaEmergenteService,
    private crearEmpl: CrearEmpleadoService
  ) {
    //this.empleados = this.crearEmpl.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.crearEmpl.empleados;
  }
  empleados: Empleado[] = []; 

  title: string = 'Listado de Empleados';

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  addEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.miServicio.Mensaje(
      'Ha sido agregado el empleado: ' +
        miEmpleado.nombre +
        ' ' +
        miEmpleado.apellido
    );
    this.crearEmpl.agregarEmpleadoServicio(miEmpleado);
  }
}
