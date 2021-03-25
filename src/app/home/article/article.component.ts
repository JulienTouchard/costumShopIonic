import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../services/costum-products.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  constructor(private costumProductsService : CostumProductsService){}
  articles = this.costumProductsService.articles;
  panier : any = [];
  totalPanier : number = 0;
  countPanier : number = 0; 
  
  selectArticle(id: any){
    // ajout des id articles dans l'array panier
    this.panier.push(id);
    this.costumProductsService.insertPanier.next(this.panier);
  }
  calculPanier(){
    // calcule de la somme du panier
    this.totalPanier = 0; 
    this.panier.map((num: string | number)=>{
      this.totalPanier += this.articles[num].price;
    });
    this.costumProductsService.gestionTotalPanier.next(this.totalPanier);
    console.log(this.totalPanier);
  }
  incrementTotalPanier(){
    this.countPanier++;
    this.costumProductsService.gestionCountPanier.next(this.countPanier);
  }
  ngOnInit() {
    this.costumProductsService.insertPanier.subscribe(status=>this.panier = status);
    this.costumProductsService.gestionTotalPanier.subscribe(status=>this.totalPanier = status);
    this.costumProductsService.gestionCountPanier.subscribe(status=>this.countPanier = status);
  }
}
