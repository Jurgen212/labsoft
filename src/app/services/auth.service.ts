import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider} from '@firebase/auth';

import { environment } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth, private router: Router ) { }


  //Sign in with google


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

      console.log( "Succes login:  " + "\n User: " + JSON.stringify( data.user) + "\n\n\n Credentials: " + JSON.stringify( data.credential ) + "\n\n\n Additional: " + JSON.stringify( data.additionalUserInfo ) );
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

}
