import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  {path : '', redirectTo : '/recipes', pathMatch : "full"},
  {path: 'recipes', component : RecipesComponent, canActivate : [AuthGuardGuard] ,
   children : [
              { path : '', component : RecipeStarterComponent , resolve: [RecipesResolverService]},
              { path : 'new', component : RecipeEditComponent,  resolve: [RecipesResolverService]},
              { path : ':id', component : RecipeDetailComponent, resolve: [RecipesResolverService]},
              { path : ':id/edit', component : RecipeEditComponent, resolve: [RecipesResolverService]},

          ]},
  {path: 'shopping-list', component : ShoppingListComponent},
  {path: 'auth', component : AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

