import { Ingredient } from './../shared/ingredient';
 export class ShoppingListService {
  private items: Ingredient[] = [];


  constructor() { }

  public getItems() {
    return this.items;
  }

  public addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

}
