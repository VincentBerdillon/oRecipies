import { Ingredient } from '../../../@types/recipe';
import './styles.scss';

type IngredientsProps = {
  list: Ingredient[]
}

function Ingredients({ list }: IngredientsProps) {
  return (
    <ul className="ingredients">
      {list.map((ingredient) => (
        <li className="ingredient" key={ingredient.id}>
          <span className="ingredient-quantity">
            {`${ingredient.quantity} ${ingredient.unit}`}
          </span>
          {' '}
          {ingredient.name}
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
