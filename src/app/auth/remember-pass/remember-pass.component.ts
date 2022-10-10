import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-remember-pass',
  templateUrl: './remember-pass.component.html',
  styleUrls: ['./remember-pass.component.css']
})
export class RememberPassComponent implements OnInit {


  formInvalid: boolean = false;
  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    
  }


  formularioRecuperar: FormGroup = this.fb.group({
    mail: [,  [ Validators.required ]]
  })


  sendData(){

    if( this.formularioRecuperar.valid ){

      this.formInvalid = false;
      console.log( this.formularioRecuperar.value.mail )
    }
    else{
      this.formInvalid = true;
    }
    
  }



}
