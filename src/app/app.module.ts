import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment.prod';


import { initializeApp }            from 'firebase/app';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AngularFireModule }        from '@angular/fire/compat';
import { provideFirebaseApp }       from '@angular/fire/app';
import { provideAuth, getAuth }     from '@angular/fire/auth';


import {MatSidenavModule} from '@angular/material/sidenav';


import { NoimagePipe } from './pipes/noimage.pipe'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    provideFirebaseApp( () => initializeApp( environment.firebaseConfig ) ),
    provideAuth( () => getAuth() )
  ],
  exports: [

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
