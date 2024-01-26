import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInteceptor } from "./auth/auth-interceptor.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInteceptor,
            multi: true
        }
    ]
})
export class CommonServiceModules { }