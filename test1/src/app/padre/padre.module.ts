import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadreRoutingModule } from './padre-routing.module';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PadreRoutingModule
  ],
  exports:[
    
  ]
})
export class PadreModule { }
