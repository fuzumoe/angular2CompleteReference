import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
      'Very tasty',
      'http://t1.gstatic.com/images?q=tbn:ANd9GcRJRmgdvK4h09zdhRaFAc-WuO-VQfZdoq7L29iq3h1NR26zF663Wf_i', [
        new Ingredient("French Fries",2),
         new Ingredient("Pork Meat ",1)
      ]),

    new Recipe('Summer Salad',
      'Okayish',
      'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])];

  constructor() { }

  public getRecipes() {
    return this.recipes;
  }

}
