import { Component } from '@angular/core';
import { Produit } from '../modele/produit';
import { ProduitService } from '../services/produit-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  standalone: false,
  styles: ``,
  templateUrl: './ajouter-produit.html',
})
export class AjouterProduit {
  newProduit=new Produit();
  constructor(private ps:ProduitService,private route:Router){
    
  }
  
  addProduit(){
    this.ps.addProduct(this.newProduit);
    this.route.navigate(["/prod"])
  }

}
