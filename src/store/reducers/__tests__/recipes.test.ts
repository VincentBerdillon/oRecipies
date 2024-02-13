import { describe, expect, it } from 'vitest';
import recipesReducer, { fetchRecipes } from '../recipes';
import fakeRecipes from '../../../data';

// Je décrie une suite de test pour mon recipes reducer
// Que souhaite-je tester ?
// - Que le reducer retourne le bon state initial (mon isLoading doit être à vrai)
// - Que le reducer retourne les bonnes données en fonction des intentions / actions émises
describe('recipes reducer', () => {
  it('should have isLoading to true by default', () => {
    // J'exécute mon reducer avec un state undefined et une action vide
    // Cela me permet de récupérer le state initial
    // au lancement il utilise un state undifined et une action INIT, recipesReducer(undefined, { type: @@INIT });
    const state = recipesReducer(undefined, { type: '' });

    // Je m'attend à ce que mon isLoading soit à vrai
    expect(state.isLoading).toBe(true);
  });
  it('should set isLoading to true when fetching recipes', () => {
    const currentState = {
      isLoading: false,
      list: [],
    };
    const newState = recipesReducer(currentState, fetchRecipes.pending);

    expect(newState.isLoading).toBe(true);
  });
  it('should handle fetchRecipes.fulfilled', () => {
    // fetchRecipes est une action asynchrone
    // Cette action à 3 états différents (pending, fulfilled, rejected)
    // Pour générer mon action fullfilled, je dois utiliser la fonction fetchRecipes.fulfilled
    // Elle a besoin de 2 arguments:
    // Le 1er c'est le payload (qui correspond aux données retourner par l'API)
    // Le 2ème c'est le requestId (qui correspond à l'id de la requête, lorsque l'on dispatch notre intention, c'est redux toolkit qui le génère d'habitude)
    const action = fetchRecipes.fulfilled(fakeRecipes, 'requestId');
    const currentState = {
      list: [],
      isLoading: true,
    };

    // Je passe les données actuel du state et mon action
    const newState = recipesReducer(currentState, action);
    // Je vais vérifier que les données retourner par le reducer correspondent à ce que j'attend

    expect(newState.isLoading).toBe(false);
    expect(newState.list).toEqual(fakeRecipes);
  });
});
