import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule { }
