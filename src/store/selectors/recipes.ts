/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import { Recipe } from '../../@types/recipe';

export function findRecipe(recipes: Recipe[], searchedSlug: string) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}
