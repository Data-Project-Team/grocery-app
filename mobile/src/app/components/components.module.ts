import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ProductCardComponent } from "./product-card/product-card.component";
import { LikedComponent } from "./liked/liked.component";


@NgModule ({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[ProductCardComponent,LikedComponent],
    exports:[ProductCardComponent,LikedComponent]
}) 
export class ComponentsModule {}