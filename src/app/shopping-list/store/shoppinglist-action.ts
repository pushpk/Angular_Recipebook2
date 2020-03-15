
import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */

export  const ADD_INGREDIENT = 'ADD_INGRIDIENT'


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class AddIngredients implements Action {
    
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) { }
}   

export type ShoppingListActionTypes  = AddIngredients


