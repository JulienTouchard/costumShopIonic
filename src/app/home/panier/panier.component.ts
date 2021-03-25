import { Component, OnInit } from '@angular/core';
import { CostumProductsService } from '../services/costum-products.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit { 
   constructor(private costumProductsService: CostumProductsService){}

  panier : any = [] ;
  totalPanier : number;
  countPanier : number;
  articles = this.costumProductsService.articles;

  removeArticle(id){
    let rmPanier = this.panier.indexOf(id);
    this.panier.splice(rmPanier, 1);
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
  decrementCountPanier(){
    this.countPanier--;
    this.costumProductsService.gestionCountPanier.next(this.countPanier);
    //console.log();
  }
  stopP(event){
    event.stopPropagation();
  }
  close(selector: string){
    console.log(selector);
    let elem = document.querySelector(selector) as HTMLElement;
    elem.classList.remove("fadeIn");
    elem.classList.add("fadeOut");
    elem.addEventListener("transitionend", ()=>{
      console.log("fin de transition fadeOut");
      elem.style.display = "none";
    });
  }
  ngOnInit() {
    this.costumProductsService.insertPanier.subscribe(status=>this.panier = status);
    this.costumProductsService.gestionTotalPanier.subscribe(status=>this.totalPanier = status);
    this.costumProductsService.gestionCountPanier.subscribe(status=>this.countPanier = status);
  }
  
}
