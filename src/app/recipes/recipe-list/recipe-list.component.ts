import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Adobo',
      'Chicken Adobo recipe',
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Chicken_adobo.jpg'
    ),
  ];
}
