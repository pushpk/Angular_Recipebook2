import * as ShoppingListActions from './shoppinglist-action';
import { Ingredient } from '../../shared/ingredient.model';


const initialState = {
    ingredients : [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
        
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActionTypes ) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients:  [...state.ingredients, action.payload]
            };
        }

        default: {
            return state;
        }
    }
}