import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: true }) ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(): void {
    const ingredient: Ingredient = {
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value,
    };
    this.shoppingListService.addIngredient(ingredient);
  }
}
