import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];

  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription =
      this.shoppingListService.ingredientChanged.subscribe(
        (ingredient) => (this.ingredients = ingredient)
      );
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }
}
