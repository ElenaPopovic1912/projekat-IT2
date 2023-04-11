import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material.module";
import { AdminLayoutComponent } from "./layout/admin-layout.component";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        HomeComponent,
        ProductComponent,
        ProductDetailsComponent
        
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AppRoutingModule
    ]
})

export class AdminModule {

}