import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {MainComponent} from './components/main/main.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {AnnoncesComponent} from './components/annonces/annonces.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {HttpClientModule} from '@angular/common/http';
import { WithSpacesPipe } from './pipes/with-spaces.pipe';
import { AnnonceComponent } from './components/annonce/annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    JumbotronComponent,
    MainComponent,
    SearchBarComponent,
    AnnoncesComponent,
    WithSpacesPipe,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
