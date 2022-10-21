import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide                    : boolean = true  ;
  passwordsNoCoinciden    : boolean = false ;
  lonPasswordIncorrecta   : boolean = false ;
  ErrorcamposObligatorios : boolean = false ;

  constructor(  private fb      : FormBuilder,
                private authServ: AuthService,
                private router  : Router ) { }

  ngOnInit(): void {
  }


  formularioRegistro: FormGroup = this.fb.group({

    name: [,  [ Validators.required ]],
    mail: [,  [ Validators.required, Validators.email ]],
    password  : [,  [ Validators.required]],
    password2 : [,  [ Validators.required]]
  })



  sendData(){

    if( this.formularioInvalido() ){
      
      console.log( "Invalid")
      return;
    }
    else{
       //Formulario valido

      
      const mail      : string =   this.formularioRegistro.value.mail    ;
      const password  : string =   this.formularioRegistro.value.password;

      this.authServ.register( { mail, password} ).
      then( data => this.router.navigateByUrl("/auth/login") ).
      catch( err => console.log( err ))
    }
   
  }




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


  //Validaciones del registro
  formularioInvalido(): boolean {
    if( !this.validacionPersonalizada()  ) return true;
    return false;
  }

  validacionPersonalizada(): boolean{

    const pass1 = this.formularioRegistro.value.password;
    const pass2 = this.formularioRegistro.value.password2;

    // Se validan las passwords

    if( pass1 != null && pass2 != null ){

      if( pass1.length < 6) return this.longitudContraseñaCorta();

      if( pass1 !== pass2 ) return this.contraseñasNoCoinciden();
    }

    else{

      this.lonPasswordIncorrecta = true;
      return false; 
    }

    if(  this.formularioRegistro.invalid  ) return this.camposIncompletos();
    
    this.desactivarErrores();
    return true;
  }


  longitudContraseñaCorta(): boolean {

    this.ErrorcamposObligatorios  =   false ;
    this.passwordsNoCoinciden     =   false ;


    this.lonPasswordIncorrecta = true;
    return false;
  }
  

  contraseñasNoCoinciden(): boolean{
    this.ErrorcamposObligatorios  = false;

    this.lonPasswordIncorrecta    = false;
    this.passwordsNoCoinciden     = true ;
    return false;
  }


  camposIncompletos(): boolean {
    this.passwordsNoCoinciden     =   false ;
    this.lonPasswordIncorrecta    =   false ;

    this.ErrorcamposObligatorios  =   true  ;
    return false;
  }


  desactivarErrores() {
    this.ErrorcamposObligatorios  =   false ;
    this.lonPasswordIncorrecta    =   false ;
    this.passwordsNoCoinciden     =   false ;
  }
}
