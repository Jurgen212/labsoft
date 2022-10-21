import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionUserService } from './services/sesion-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserVigilantGuard implements CanActivate {

  constructor( private sesionServ: SesionUserService, private router: Router){

  };


  redirect( flag: boolean ){
    if( !flag ){
      this.router.navigateByUrl("/");
    }
  }




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if( this.sesionServ.validarCuentaActiva() ) return true;
    else{
      this.redirect( false );
      return false;
    }
  }
  
}
