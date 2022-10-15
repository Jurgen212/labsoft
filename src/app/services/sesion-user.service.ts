import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionUserService {

  constructor() { }


  instanciaEnLocalHost( image: string, mail: string, uid: string ){

    localStorage.setItem( "user", JSON.stringify([ image, mail, uid ] ) ) ;
  }
}
