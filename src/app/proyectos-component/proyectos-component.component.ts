import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Empleado} from "../app-empleados/empleado.model";
import {VentanaEmergenteService} from "../ventana-emergente.service";
import {CrearEmpleadoService} from "../crear-empleado.service";

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router: Router, private miServicio: VentanaEmergenteService, private empleadoService: CrearEmpleadoService) {
  }

  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }


  volverHome() {
    this.router.navigate(['']);
  }

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
    this.empleadoService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }
}
