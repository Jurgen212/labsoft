
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user!: SocialUser;
  loggedIn!: boolean;



  hide            : boolean = true  ;
  loginIncorrecto : boolean = false ;

  
  constructor( private fb: FormBuilder, private authService: SocialAuthService ) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log( this.user )
    });
  };


  formularioLogin: FormGroup = this.fb.group({
    email   : [ ,Validators.required ],
    password: [ ,Validators.required ]
  });


  sendData(){

    if( !this.formularioLogin.valid ){

      this.loginIncorrecto = true;
    }
  }


  signInWithGoogle(): void {
    this.authService.signOut();
    this.authService.signIn( GoogleLoginProvider.PROVIDER_ID );
  }

  signInWithFB(): void {
    this.authService.signOut();
    this.authService.signIn( FacebookLoginProvider.PROVIDER_ID );
  }

  signOut(): void {
    
    this.authService.signOut();
  }


  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
