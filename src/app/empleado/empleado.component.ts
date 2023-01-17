import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre='Danel';
  apellido='Caballero';
  edad=9;
  empresa="Apple";
  habilitacionCuadro=false;
  usuRegistrado=false;
  texto="No hay nadie registrado"

  llamaempresa(value:string){}

  getRegistroUsuario(){

    this.usuRegistrado=false;
  }

  /*cambiaEmpresa(event:Event){

    this.empresa=((<HTMLInputElement>event.target).value);
  }
  */

  setUsuRegistrado(event:Event){
    //alert("El usuario ha sido registrado")
    this.texto="El usuario se acaba de registrar"
    if((<HTMLInputElement>event.target).value=="si"){
      this.texto="El usuario se acaba de registrar";

    }else{
      this.texto="NO HAY NADIE REGISTRADO";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
