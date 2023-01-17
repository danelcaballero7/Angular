import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajo-directiva-app',
  templateUrl: './trabajo-directiva-app.component.html',
  styleUrls: ['./trabajo-directiva-app.component.css'],
})
export class TrabajoDirectivaAppComponent {
  tittle = 'Registro de Usuarios';
  parrafo = '';
  registrado: boolean = false;
  nombre: string = '';
  apellido: string = '';
  cargo:string='';
  entradas: object[];

  constructor() {
    this.entradas = [
      { t:"Python mas presente cada dia"},
      { t:"Java desde hace mucho tiempo"},
      { t:"C++ para videojuegos"},
      { t:"JvaScript te voy a aprender"},
      { t:"Typescript eres mi reto"},
    ]
  }

  usuarioRegistrado() {
    this.parrafo = 'Usuario registrado con exito';
    this.registrado = true;
  }
}
