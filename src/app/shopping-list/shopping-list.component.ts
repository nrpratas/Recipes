import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatos', 5),
    new Ingredient('Tomatoes', 15)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngridientAdded(ingredient: Ingredient) {

    this.ingredients.push(ingredient);
  }
}
