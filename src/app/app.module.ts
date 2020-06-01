import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecComponent } from './tec/tec.component';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    TecComponent,
    AbecedarioComponent,
    PalabrasComponent,
    ConversacionesComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
