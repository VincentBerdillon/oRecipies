export interface Recipe {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Ingredient {
  id: number;
  quantity: number | string;
  unit: string;
  name: string;
}
