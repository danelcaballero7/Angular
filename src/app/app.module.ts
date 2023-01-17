import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { MiniCaclculadoraComponent } from './mini-caclculadora/mini-caclculadora.component';
import { TrabajoDirectivaAppComponent } from './trabajo-directiva-app/trabajo-directiva-app.component';
import { AppEmpleadosComponent } from './app-empleados/app-empleados.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicaEmpleadoCComponent } from './caracteristica-empleado-c/caracteristica-empleado-c.component';
import { VentanaEmergenteService } from './ventana-emergente.service';
import { CrearEmpleadoService } from './crear-empleado.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';

const appRoutes:Routes=[
  {path:'', component: HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes', component: QuienesComponentComponent },
  {path:'contacto', component: ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    MiniCaclculadoraComponent,
    TrabajoDirectivaAppComponent,
    AppEmpleadosComponent,
    EmpleadoHijoCComponent,
    CaracteristicaEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [VentanaEmergenteService, CrearEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
