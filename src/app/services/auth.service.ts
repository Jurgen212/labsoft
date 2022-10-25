import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, getAuth} from '@firebase/auth';

import { environment } from '../../environments/environment.prod';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { SesionUserService } from './sesion-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth     : AngularFireAuth   , 
               private userAuth : Auth              ,
               private localServ: SesionUserService ,
               private router   : Router            ) { }

  //Register user

    register( {  mail, password }: any ){

      return createUserWithEmailAndPassword( this.userAuth, mail, password );
    }

    login({ mail, password}: any ){
      
      return signInWithEmailAndPassword( this.userAuth, mail, password );
    }

  //Sign in with social networks


  googleAuth(){
    return this.authLogin( new GoogleAuthProvider() );
  }


  facebookAuth(){
    return this.authLogin( new FacebookAuthProvider( )  );
  }

  githubAuth(){
    return this.authLogin( new GithubAuthProvider() );
  }


  twitterAuth(){
    return this.authLogin( new TwitterAuthProvider() );
  }

  authLogin( provider: any ){
    return this.auth.signInWithPopup( provider )
    .then( data => {

      this.loginExitoso( data );
    })
    .catch( error => {

      console.log("Error en auth.service: " + error )
    });
  }

  async logOut(){
    this.auth.signOut();
  }


  getStateUser(){

    return this.auth.authState;
  }


  loginExitoso( data: any ){

    console.log( "Succes login:  " + "\n User: " + JSON.stringify( data.user) );

      if( data.user?.email ){
        
        this.localServ.instanciaEnLocalHost( data.user?.photoURL!, data.user?.email!, data.user?.uid! );
      } else this.localServ.instanciaEnLocalHost( data.user?.photoURL!, data.user?.displayName! , data.user?.uid! );
       this.router.navigateByUrl("/user/info");
  }


  recordarContraseña( email : string ){

    this.auth.sendPasswordResetEmail( email )
    .then( ( data ) => {
      console.log( data );
      this.router.navigateByUrl("/auth/");
    }, err =>{

      console.log( err );
    })

  }


}
