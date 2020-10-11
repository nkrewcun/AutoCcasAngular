import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnoncesComponent} from './components/annonces/annonces.component';
import {AnnonceComponent} from './components/annonce/annonce.component';


const routes: Routes = [
  {path: 'annonces', component: AnnoncesComponent},
  {path: 'annonces/:id', component: AnnonceComponent},
  {path: '', component: AnnoncesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
