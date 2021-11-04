import { Recipe } from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('testRecipe2',
      'Best Recipe2',
      'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe('testRecipe',
      'Best Recipe',
      'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
