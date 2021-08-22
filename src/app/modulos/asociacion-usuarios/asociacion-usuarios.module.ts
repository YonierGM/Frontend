import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsociarComponent } from './asociar/asociar.component';



@NgModule({
  declarations: [
    AsociarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AsociarComponent]
})
export class AsociacionUsuariosModule { }
