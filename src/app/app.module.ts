import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsociacionUsuariosModule } from './modulos/asociacion-usuarios/asociacion-usuarios.module';
import { FiltrosBusquedaModule } from './modulos/filtros-busqueda/filtros-busqueda.module';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    HttpClientModule,
    FormsModule,
    FiltrosBusquedaModule,
    AsociacionUsuariosModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
