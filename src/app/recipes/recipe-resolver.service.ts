import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/datastorage.services';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private ds: DataStorageService, private rs : RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        
        const recipes = this.rs.getRecipes();
        if(recipes.length === 0)
        {
            return this.ds.getDataFromServer();
        } else {
           return recipes;
        }
        

    }
}
