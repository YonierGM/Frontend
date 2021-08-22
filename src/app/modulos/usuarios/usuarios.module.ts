import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    ListarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AgregarComponent, EditarComponent, EliminarComponent, ListarComponent, FooterComponent, NavbarComponent]
})
export class UsuariosModule { }
