import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ProductCardComponent } from "./product-card/product-card.component";


@NgModule ({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[ProductCardComponent],
    exports:[ProductCardComponent]
}) 
export class ComponentsModule {}