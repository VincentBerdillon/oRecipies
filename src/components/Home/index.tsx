import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';
import { useAppSelector } from '../../hooks/redux';

function Home() {
  const recipes = useAppSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        recipes={recipes}
      />
    </Page>
  );
}

export default Home;
