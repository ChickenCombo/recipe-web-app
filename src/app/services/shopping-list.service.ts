import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Apple', amount: 12 },
    { name: 'Tomatoes', amount: 10 },
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredient: Ingredient[]): void {
    this.ingredients.push(...ingredient);
    this.ingredientChanged.emit([...this.ingredients]);
  }
}
