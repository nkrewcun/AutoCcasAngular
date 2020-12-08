import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {AnnoncesComponent} from './components/annonces/annonces.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {HttpClientModule} from '@angular/common/http';
import {WithSpacesPipe} from './pipes/with-spaces.pipe';
import {AnnonceComponent} from './components/annonce/annonce.component';
import {ConnexionComponent} from './components/connexion/connexion.component';
import {FormsModule} from '@angular/forms';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {CompteComponent} from './components/compte/compte.component';
import {EditProfessionnelComponent} from './components/edit-professionnel/edit-professionnel.component';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { ManageAnnoncesComponent } from './components/manage-annonces/manage-annonces.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    JumbotronComponent,
    SearchBarComponent,
    AnnoncesComponent,
    WithSpacesPipe,
    AnnonceComponent,
    ConnexionComponent,
    CompteComponent,
    EditProfessionnelComponent,
    AddAnnonceComponent,
    ManageAnnoncesComponent,
    EditAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
