import { Service } from '@angular/core';
import { Produit } from '../modele/produit';

@Service()
export class ProduitService {
    produits! : Produit[]
    
      constructor() {
        // 2. Remplissage du tableau avec une liste de produits
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
        ];
      }

      getAllProduct(){
        return this.produits;
      }
      addProduct(p:any){
        this.produits.push(p);
      }
}
