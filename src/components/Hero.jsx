import '../css/Hero.css';
import mockup from '../assets/image-mockups.png';
import Cta from './Cta';

const Hero = () => {
  return(
    <section className="hero">
      <div className="hero__container">
        <div className="hero__images">
          <div className="hero__bg"></div>
          <div className="hero__mockup">
            <figure className="mockup__figure">
              <img
                className="mockup__img"
                src={mockup}
                alt="Easybank mockup"
              />
            </figure>
          </div>
        </div>
        <div className="hero__texts">
          <div className="section__texts hero__texts__content">
            <h1 className="title__section hero__title">
              Next generation digital banking
            </h1>
            <p className="description__section hero__description">
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <Cta
              route="#"
              text="Request Invite"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;