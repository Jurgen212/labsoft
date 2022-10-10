import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide                    : boolean = true  ;
  passwordsNoCoinciden    : boolean = false ;
  lonPasswordIncorrecta   : boolean = false ;
  correoInorrecto         : boolean = false ;
  ErrorcamposObligatorios : boolean = false ;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  formularioRegistro: FormGroup = this.fb.group({

    name: [,  [ Validators.required ]],
    mail: [,  [ Validators.required ]],
    password  : [,  [ Validators.required]],
    password2 : [,  [ Validators.required]]
  })



  sendData(){

    if( this.formularioInvalido() ){
      this.ErrorcamposObligatorios = true;
      console.log( "Invalid")
      return;
    }

    this.ErrorcamposObligatorios = false;
  }


  validacionPersonalizada(): boolean{

    const pass1 = this.formularioRegistro.value.password;
    const pass2 = this.formularioRegistro.value.password2;
    // Se validan las passwords
    if( pass1 != null && pass2 != null ){

      if( pass1.length < 6){
        
        this.lonPasswordIncorrecta = true;
        return false;
      }

      
      if( pass1 !== pass2 ){
        

        this.lonPasswordIncorrecta  = false;
        this.passwordsNoCoinciden = true;
        return false;
      }
    }
    else{

      this.lonPasswordIncorrecta = true;
      return false; 
    }

    
    this.correoInorrecto        =   false ;
    this.lonPasswordIncorrecta  =   false ;
    this.passwordsNoCoinciden   =   false ;
    return true;

  }

  formularioInvalido(): boolean {
    if( !this.validacionPersonalizada() || this.formularioRegistro.invalid  ){

      return true;
    }
    
    return false;
  }
  
}
