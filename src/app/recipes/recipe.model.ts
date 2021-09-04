/*
Define a TypeScript class as a model for the recipe data item.
*/
export class Recipe {
  public name: string; // name of recipe
  public description: string; // description for that recipe
  public imagePath: string; // url of an image of the recipe

  constructor(
    recipeName: string,
    recipeDscription: string,
    recipeImagePathURL: string
  ) {
    this.name = recipeName;
    this.description = recipeDscription;
    this.imagePath = recipeImagePathURL;
  }
}
