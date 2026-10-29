import { Component } from '@angular/core';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-ajouter-produit',
  standalone: false,
  styles: ``,
  templateUrl: './ajouter-produit.html',
})
export class AjouterProduit {
  newProduit=new Produit();
  
  addProduit(){
    console.log(this.newProduit)
  }
}
