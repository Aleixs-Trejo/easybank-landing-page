import '../css/Card.css';

const CardMain = ({ img, title, description }) => {
  return(
    <div className="card card__main">
      <div className="card__content">
        <figure className="card__figure">
          <img
            className="card__img"
            src={img}
            alt="Card image"
          />
        </figure>
        <h4 className="title__section card__title">{title}</h4>
        <p className="description__section card__description">{description}</p>
      </div>
    </div>
  );
};

export default CardMain;