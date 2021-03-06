import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { BlankComponent } from "./blank/blank.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { 
        path: "items", component: ItemsComponent,
        children: [
            { path: "item/:id", component: ItemDetailComponent },
            { path: "blank", component: BlankComponent }
        ]
    },
];

// const routes: Routes = [
//     { path: "", redirectTo: "/items", pathMatch: "full" },
//     { path: "items", component: ItemsComponent, },
//     { path: "items/item/:id", component: ItemDetailComponent },
//     { path: "items/blank", component: BlankComponent }
// ];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }