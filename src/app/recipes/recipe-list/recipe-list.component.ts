import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Amer',
      'sara bf',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'Amer',
      'sara bf',
      'data:image/jpeg;base64,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'
    ),
    new Recipe(
      'Amer',
      'sara bf',
      'data:image/jpeg;base64,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'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
}
