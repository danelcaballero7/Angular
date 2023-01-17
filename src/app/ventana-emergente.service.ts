import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentanaEmergenteService {
  /**
   *
   */
  constructor() {
   

  }

 Mensaje(mensaje:string){
  alert(mensaje);
 }
}
