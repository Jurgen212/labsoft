import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVigilantGuard } from './user-vigilant.guard';

const routes: Routes = [
  {
    path: `auth`,
    loadChildren: () => import('./auth/auth.module' ).then( m => m.AuthModule )
  },
  {
    path        : 'user',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioModule ),
    canActivate : [ UserVigilantGuard ]
  },
  {
    path: `**`,
    redirectTo: `auth`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), ],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
