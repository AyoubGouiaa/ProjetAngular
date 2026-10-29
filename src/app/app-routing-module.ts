import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduit } from './list-produit/list-produit';
import { AjouterProduit } from './ajouter-produit/ajouter-produit';
import { not } from 'rxjs/internal/util/not';
import { NotFound } from './not-found/not-found';

const routes: Routes = [
  {path:"prod",component:ListProduit},
  {path:"addProduit",component:AjouterProduit},
  { path: '', redirectTo: 'prod', pathMatch: 'full' },
  {path:"**",component:NotFound}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
