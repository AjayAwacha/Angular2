import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

//Module

import { RecipeRoutingModule } from './recipe-routing.module';

import { LogTestModule } from '../serviceTest/log-test.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    LogTestModule
    ]
})
export class RecipeModule { }
