import '../css/Card.css';

const CardArticle = ({ img, author, link, title, description }) => {
  return(
    <div className="card card__article">
      <div className="card__article__content">
        <figure className="card__article__figure">
          <img
            className="card__article__img"
            src={img}
            alt="Card image"
          />
        </figure>
        <div className="card__article__texts">
          <span className="author__section card__author">{author}</span>
          <a href={link} className="title__section card__article__title">{title}</a>
          <p className="description__section card__article__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;