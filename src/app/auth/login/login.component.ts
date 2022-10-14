
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loginIncorrecto : boolean = false ;

  
  constructor( private fb: FormBuilder, private authServ: AuthService  ) { }

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
}
