import { describe, expect, it } from 'vitest';
import { findRecipe } from '../recipes';
import fakeRecipes from '../../../data';

// tester findRecipe
// vérifier qu'on nous retourne un objet contenant une propriété id si on passe le premier slug
// vérifier qu'on nous retourne la première recette si on passe le premier slug
// vérifier qu'on nous retourne undefined si on passe une slug bidon

describe('recipes selector', () => {
  it('should return an object with the id property of the first slug', () => {
    const recipe = findRecipe(fakeRecipes, fakeRecipes[0].slug);
    expect(recipe).toHaveProperty('id');
  });
  it('should return the first recipe object of the first slug', () => {
    const firstRecipe = fakeRecipes[0];
    const recipe = findRecipe(fakeRecipes, fakeRecipes[0].slug);
    expect(firstRecipe).toEqual(recipe);
  });
  it('should verify if the slug exists', () => {
    const recipe = findRecipe(fakeRecipes, 'pizza');
    expect(recipe).toBeUndefined();
    // expect(recipe).toBeTypeOf('undefined');
    // expect(typeof recipe).toBe('undefined');
    // expect(recipe).toBe(undefined);
  });
});
