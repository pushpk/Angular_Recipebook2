import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { relative } from 'path';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path : '', redirectTo : '/recipes', pathMatch : "full"},
  {path: 'recipes', component : RecipesComponent,
   children : [
              { path : '', component : RecipeStarterComponent},
              { path : 'new', component : RecipeEditComponent},
              { path : ':id', component : RecipeDetailComponent},
              { path : ':id/edit', component : RecipeEditComponent},

          ]},
  {path: 'shopping-list', component : ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

