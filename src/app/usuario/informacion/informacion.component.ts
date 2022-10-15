import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor() { }

  imageUrl: string = null!;
  userMail: string = ""   ;
  userUid : string = ""   ;

  ngOnInit(): void {
    this.obtenerDataLocalStorage();
  }



  obtenerDataLocalStorage(){

    const dataUser  = JSON.parse( localStorage.getItem("user")! );
    this.imageUrl   = dataUser[0];
    this.userMail   = dataUser[1];
    this.userUid    = dataUser[2];
  }
}
