import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SearchComponent } from "./search/search.component";


@NgModule ({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[SearchComponent],
    exports:[SearchComponent]
}) 
export class ComponentsModule {}