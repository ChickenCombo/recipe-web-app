import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Apple', amount: 12 },
    { name: 'Tomatoes', amount: 10 },
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next([...this.ingredients]);
  }

  addIngredients(ingredient: Ingredient[]): void {
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next([...this.ingredients]);
  }
}
