import { Component } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  standalone: false,
  styleUrl: './list-produit.css',
  templateUrl: './list-produit.html',
}


)

export class ListProduit {
  a=5

  info={
    nom:"amine",
    prenom:"boubaker",
    age:20
  }

  afficher(){
    console.log("Bnjr");
  }


  i=0


  nom:string[]=["Ali","amine","omar","Adem Jr"]
  

}
