import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { IndexComponent } from "./index/index.component";
import { WebLayoutComponent } from "./layout/web-layout.component";

@NgModule({
    declarations: [
        WebLayoutComponent,
        IndexComponent,
    ],
    imports: [
        AppRoutingModule,
        NgbModule
    ]
})

export class WebModule {

}