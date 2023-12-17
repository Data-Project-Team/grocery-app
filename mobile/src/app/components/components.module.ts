import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchComponent } from "./search/search.component";

import { ProductCardComponent } from "./product-card/product-card.component";
import { LikedComponent } from "./liked/liked.component";
import { AddcartBtnComponent } from "./add-cart-btn/add-cart-btn.component";

import { AddressChangeComponent } from "./address-change/address-change.component";
import { PaymentMethodChangeComponent } from "./payment-method-change/payment-method-change.component";
import { SettingsComponent } from "./settings/settings.component";




@NgModule ({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],

    declarations:[ProductCardComponent,LikedComponent, SearchComponent,AddcartBtnComponent,AddressChangeComponent, PaymentMethodChangeComponent , SettingsComponent ], 
    exports:[ProductCardComponent,LikedComponent, AddcartBtnComponent, SearchComponent ,AddressChangeComponent , PaymentMethodChangeComponent , SettingsComponent]

    
}) 
export class ComponentsModule {}