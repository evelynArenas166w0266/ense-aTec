import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecComponent } from './tec/tec.component';
import { AbecedarioComponent } from './abecedario/abecedario.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'inicio', component: TecComponent },
  { path: 'abecedario', component: AbecedarioComponent },
  { path: 'palabras', component: PalabrasComponent },
  { path: 'conversaciones', component: ConversacionesComponent },
  { path: 'videos', component: VideosComponent },
  { path: '**', component: TecComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
