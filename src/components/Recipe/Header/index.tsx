import './styles.scss';

type HeaderProps = {
  name: string;
  thumbnail: string;
  author: string;
  difficulty: string;
}

function Header({
  name, thumbnail, author, difficulty,
}: HeaderProps) {
  return (
    <header className="presentation">
      <img
        src={thumbnail}
        alt=""
        className="presentation-image"
      />
      <div className="presentation-content">
        <h1 className="presentation-title">{name}</h1>
        <p className="presentation-infos">
          {`${author} - ${difficulty}`}
        </p>
      </div>
    </header>
  );
}

export default Header;
