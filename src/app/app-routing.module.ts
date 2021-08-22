import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociarComponent } from './modulos/asociacion-usuarios/asociar/asociar.component';
import { BusquedasComponent } from './modulos/filtros-busqueda/busquedas/busquedas.component';
import { FiltrosBusquedaModule } from './modulos/filtros-busqueda/filtros-busqueda.module';
import { AgregarComponent } from './modulos/usuarios/agregar/agregar.component';
import { EditarComponent } from './modulos/usuarios/editar/editar.component';
import { ListarComponent } from './modulos/usuarios/listar/listar.component';

const routes: Routes = [
  
  {path:'Agregar', component:AgregarComponent},
  {path:'Listar', component:ListarComponent},
  {path:'Asociar', component:AsociarComponent},
  {path:'filtros-busquedas', component:BusquedasComponent},
  {path:'Editar', component:EditarComponent},
  {path:'',pathMatch:'full', redirectTo:'Listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
