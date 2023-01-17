import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Empleado} from "../app-empleados/empleado.model";
import {VentanaEmergenteService} from "../ventana-emergente.service";
import {CrearEmpleadoService} from "../crear-empleado.service";

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private miServicio: VentanaEmergenteService, private empleadoService: CrearEmpleadoService) {
  }

  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado = this.empleadoService.encontrarEmpleado(this.indice);
  }


  volverHome() {
    this.router.navigate(['']);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  indice: number ;

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
