import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { InformacionComponent } from './informacion/informacion.component';
import { NoimagePipe } from '../pipes/noimage.pipe';


@NgModule({
  declarations: [
    InformacionComponent,
    NoimagePipe
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
