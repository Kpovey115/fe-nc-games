import boardGames from "../css/media/boardGames.png";

const HomePage = () => {
  return (
    <div className='HomePage'>
      <h3> Welcome to a quiet nerds corner.</h3>
      <p>A place for fellow nerds to relax and discuss board games</p>
      <figure>
        <img
          src={boardGames}
          alt='board game collection'
          className='HomeImg'
        ></img>
        <figcaption>
          An image of amazing board game collection we should all aspire to own
        </figcaption>
      </figure>

      <p>This website has been made in React</p>
      <p>
        The purpose of this website was to strengthen my understanding of react
        and put my frontend knowledge into practice. Please remember this is a
        work in progress and shall regularly be updated as I trial and error new
        techniques and technologies
      </p>

      <p>
        <a href='https://github.com/Kpovey115/fe-nc-games' target='blank'>
          Please click here to see GitHub Repo
        </a>
      </p>
    </div>
  );
};

export default HomePage;
