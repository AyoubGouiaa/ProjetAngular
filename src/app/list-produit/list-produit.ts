









import { Component } from '@angular/core';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit-service';

@Component({
  selector: 'app-list-produit',
  standalone: false,
  styleUrl: './list-produit.css',
  templateUrl: './list-produit.html',
}


)

export class ListProduit {
   produits! : Produit[]

  constructor(private ps:ProduitService) {
    /*// 2. Remplissage du tableau avec une liste de produits
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Portable ASUS',
        prixProduit: 2500,
        dateCreation: new Date('2026-01-15')
      },
      {
        idProduit: 2,
        nomProduit: 'Smartphone Samsung',
        prixProduit: 1800,
        dateCreation: new Date('2026-02-10')
      },
      {
        idProduit: 3,
        nomProduit: 'Écran 27 pouces',
        prixProduit: 750,
        dateCreation: new Date('2026-03-01')
      }
    ];*/
    this.produits=this.ps.getAllProduct();
  
  }

  

}
