import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'; // this was auto added by VS code with it's extensions

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  //
  // Instantiate an array of type Recipe to be the empty array
  //
  recipes: Recipe[] = [
    new Recipe(
      'Gregs test recipe',
      'The best recipe ever!',
      'https://live.staticflickr.com/7864/47044929942_fc84a2bccf_b.jpg'
    ),
    new Recipe(
      'Spaghetti Bolognese',
      'Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce. This recipe comes courtesy of BBC Good Food user Andrew Balmer',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
