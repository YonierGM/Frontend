import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { UsuariosModule } from '../usuarios/usuarios.module';



@NgModule({
  declarations: [
    BusquedasComponent
  ],
  imports: [
    CommonModule,
    UsuariosModule
  ],
  exports: [BusquedasComponent]
})
export class FiltrosBusquedaModule { }
