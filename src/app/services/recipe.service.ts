import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipes: Recipe[] = [];
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.emitUpdatedRecipe();
  }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.emitUpdatedRecipe();
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.emitUpdatedRecipe();
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.emitUpdatedRecipe();
  }

  onAddToShoppingList(ingredient: Ingredient[]): void {
    this.shoppingListService.addIngredients([...ingredient]);
  }

  emitUpdatedRecipe(): void {
    this.recipesChanged.next([...this.recipes]);
  }
}
