import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './shared/alert/alert.component';

//Feacture Modules

import { RecipeModule } from './recipes/recipe.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { CommonServiceModules } from './core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogTestModule } from './serviceTest/log-test.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    LoadingSpinnerComponent,
    AuthComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingModule,
    LogTestModule,
    CommonServiceModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
