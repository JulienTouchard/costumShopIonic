import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CostumProductsService {

  constructor() { }
  // fonctions destinées à mofdifier les entrées de mon service
  insertPanier : Subject<any> = new Subject<any[]>();
  // fonction de gestion du totalPanier
  gestionTotalPanier : Subject<number> = new Subject<number>();
  // fonction de gestion du nombre d'article dans le panier
  gestionCountPanier : Subject<number> = new Subject<number>();
  // Menu toggles boolean pour l'affichage ou non de mon panier
  togglePanier : Subject<boolean> = new Subject<boolean>();
  

  
  // tous mes produits
  articles = [
    {
      id:0,
      name:"Lapinou",
      url:"../assets/img/lapin.jpg",
      price:400,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. Anti allergène. Existe en plusieurs coloris. De grands moments pour vos soirées ..."
    },
   {
     id:1,
     name:"Canard",
     url:"../assets/img/shopping.webp",
     price:350,
     promo:false,
     largeur:200,
     description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:2,
      name:"Chaton",
      url:"../assets/img/aerobic.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:3,
      name:"Mario",
      url:"../assets/img/mario.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:4,
      name:"Los pollos hermanos",
      url:"../assets/img/poulet.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:5,
      name:"Sushi",
      url:"../assets/img/sushi.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
    {
      id:6,
      name:"Queen Mum",
      url:"../assets/img/queen.jpg",
      price:500,
      promo:true,
      largeur:200,
      description:"Costume 100% pure laine vierge. blabla"
    },
  ];
}
