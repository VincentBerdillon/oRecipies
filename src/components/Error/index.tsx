import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function Error() {
  return (
    <Page>
      <AppHeader />
      <Content
        title="Erreur"
        text="Nous sommes désolé, Une erreur s'est produite."
        recipes={[]}
      />
    </Page>
  );
}

export default Error;
