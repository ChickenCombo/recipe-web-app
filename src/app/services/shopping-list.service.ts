import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Apple', amount: 12 },
    { name: 'Tomatoes', amount: 10 },
  ];

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.emitUpdatedIngredients();
  }

  addIngredients(ingredient: Ingredient[]): void {
    this.ingredients.push(...ingredient);
    this.emitUpdatedIngredients();
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.emitUpdatedIngredients();
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.emitUpdatedIngredients();
  }

  emitUpdatedIngredients(): void {
    this.ingredientChanged.next([...this.ingredients]);
  }
}
