import { Recipe } from '../../@types/recipe';
import Card from '../Card';
import './styles.scss';

type ContentProps = {
  title: string;
  text: string;
  recipes: Recipe[];
};

function Content({ title, text, recipes }: ContentProps) {
  return (
    <section className="content">
      <h1 className="content-title">{title}</h1>
      <p className="content-text">{text}</p>
      {recipes && (
        <div className="content-list">
          {recipes.map((recipe: Recipe) => (
            <Card key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Content;
