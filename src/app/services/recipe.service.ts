import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'Chicken Adobo',
      description: 'Chicken Adobo recipe',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg',
      ingredients: [
        { name: 'Salt', amount: 1 },
        { name: 'Soy Sauce', amount: 1 },
      ],
    },
    {
      name: 'Bistek Tagalog',
      description: 'Bistek Tagalog recipe',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bistek_Tagalog-02.jpg/640px-Bistek_Tagalog-02.jpg',
      ingredients: [
        { name: 'Pepper', amount: 2 },
        { name: 'Onion', amount: 2 },
      ],
    },
    {
      name: 'Beef Broccoli',
      description: 'Beef Broccoli recipe',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Broccoli_beef_in_hoisin_sauce_%284667228610%29.jpg/1200px-Broccoli_beef_in_hoisin_sauce_%284667228610%29.jpg',
      ingredients: [
        { name: 'Beef', amount: 3 },
        { name: 'Broccoli', amount: 3 },
      ],
    },
  ];

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }
}
