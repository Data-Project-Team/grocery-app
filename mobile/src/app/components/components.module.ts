import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchComponent } from "./search/search.component";

import { ProductCardComponent } from "./product-card/product-card.component";
import { LikedComponent } from "./liked/liked.component";
import { AddcartBtnComponent } from "./add-cart-btn/add-cart-btn.component";


@NgModule ({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[ProductCardComponent,LikedComponent, SearchComponent,AddcartBtnComponent], 
    exports:[ProductCardComponent,LikedComponent, AddcartBtnComponent, SearchComponent]
}) 
export class ComponentsModule {}