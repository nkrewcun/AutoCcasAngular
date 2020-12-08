import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnnoncesComponent} from './components/annonces/annonces.component';
import {AnnonceComponent} from './components/annonce/annonce.component';
import {ConnexionComponent} from './components/connexion/connexion.component';
import {RoleGuard} from './guards/role.guard';
import {CompteComponent} from './components/compte/compte.component';
import {AddAnnonceComponent} from './components/add-annonce/add-annonce.component';
import {ManageAnnoncesComponent} from './components/manage-annonces/manage-annonces.component';
import {EditAnnonceComponent} from './components/edit-annonce/edit-annonce.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AnnoncesComponent},
  {path: 'annonces/:id', component: AnnonceComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'compte', component: CompteComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {path: 'compte/annonces/add', component: AddAnnonceComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {path: 'compte/annonces', component: ManageAnnoncesComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {path: 'compte/annonces/:id', component: AnnonceComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  },
  {path: 'compte/annonces/edit/:id', component: EditAnnonceComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_USER'
    }
  }
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
