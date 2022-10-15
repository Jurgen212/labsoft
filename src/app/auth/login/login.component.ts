
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SesionUserService } from '../../services/sesion-user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loginIncorrecto : boolean = false ;

  
  constructor(  private fb        : FormBuilder, 
                private authServ  : AuthService,
                private localServ : SesionUserService,
                private router    : Router             ) { }

  ngOnInit(): void {

  };


  formularioLogin: FormGroup = this.fb.group({
    email   : [ ,Validators.required ],
    password: [ ,Validators.required ]
  });


  sendData(){

    if( !this.formularioLogin.valid ){

      this.loginIncorrecto = true;
    }
    else{


      const mail    : string = this.formularioLogin.value.email   ;
      const password: string = this.formularioLogin.value.password;


      this.authServ.login({ mail, password }).
      then( data => this.loginExitoso( data )).
      catch( err => console.log( err ))
    }
  }

  loginExitoso( data: any ){
    this.localServ.instanciaEnLocalHost( data.user?.photoURL!, data.user?.email!, data.user?.uid! );
    this.router.navigateByUrl("/user/info");
  };


  facebookAuth(){
    this.authServ.facebookAuth();
  }

  googleAuth(){
    this.authServ.googleAuth();
  }


  githubAuth(){
    this.authServ.githubAuth();
  }

  twitterAuth(){
    this.authServ.twitterAuth();
  }
}
