import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { CostumesService } from '../costumes.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  constructor(
    private dataService : DataService ,
    private costumesService : CostumesService
    ){}
  articles = this.costumesService.articles;
  panier : any = [];
  totalPanier : number = 0;
  
  selectArticle(id){
    // ajout des id articles dans l'array panier
    this.panier.push(id);
    this.dataService.insertPanier.next(this.panier);
  }
  calculPanier(){
    // calcule de la somme du panier
    this.totalPanier = 0; 
    this.panier.map((num)=>{
      this.totalPanier += this.articles[num].price;
    });
    this.dataService.calcPanier.next(this.totalPanier);
    console.log(this.totalPanier);
  }
  ngOnInit() {
    this.dataService.insertPanier.subscribe(status=>this.panier = status);
    this.dataService.calcPanier.subscribe(status=>this.totalPanier = status);
  }
}
