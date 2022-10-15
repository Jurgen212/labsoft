import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: `info`, component : InformacionComponent    },
      { path: '**'  , redirectTo: 'info'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
