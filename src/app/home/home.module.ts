import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {MenuComponent} from './menu/menu.component';
import {ArticleComponent} from './article/article.component';
import {PanierComponent} from './panier/panier.component';
import { FooterComponent } from './footer/footer.component';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MenuComponent,ArticleComponent,PanierComponent,FooterComponent]
})
export class HomePageModule {}
