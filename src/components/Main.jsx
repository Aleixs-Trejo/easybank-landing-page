// CSS
import '../css/Main.css';

// Components
import CardMain from './CardMain';

// Icons
import iconOnline from '../assets/icon-online.svg';
import iconBudgeting from '../assets/icon-budgeting.svg';
import iconOnboarding from '../assets/icon-onboarding.svg';
import iconApi from '../assets/icon-api.svg';
import CardArticle from './CardArticle';

// Images
import currency from '../assets/image-currency.jpg';
import restaurant from '../assets/image-restaurant.jpg';
import plane from '../assets/image-plane.jpg';
import confetti from '../assets/image-confetti.jpg';



const Main = () => {
  return(
    <main className="main">
      <section className="main__section">
        <div className="main__section__container container">
          <div className="main__section__content section__texts">
            <h2 className="title__section">
              Why choose Easybank?
            </h2>
            <p className="description__section">
              We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
            <section className="section__cards main__section__cards">
              <div className="cards__container">
                <article className="article__cards">
                  <CardMain
                    img={iconOnline}
                    title="Online Banking"
                    description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                  />
                  <CardMain
                    img={iconBudgeting}
                    title="Simple Budgeting"
                    description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits"
                  />
                  <CardMain
                    img={iconOnboarding}
                    title="Fast Onboarding"
                    description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                  />
                  <CardMain
                    img={iconApi}
                    title="Open API"
                    description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                  />
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="article__section">
        <div className="article__section__container container">
          <div className="article__section__content section__texts">
            <h2 className="title__section">
              Latest Articles
            </h2>
            <section className="section__articles article__section__articles">
              <div className="cards__container">
                <article className="article__cards">
                  <CardArticle
                    img={currency}
                    author="By Claire Robinson"
                    link="#"
                    title="Receive money in any currency with no fees"
                    description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                  />
                  <CardArticle
                    img={restaurant}
                    author="By Wilson Hutton"
                    link="#"
                    title="Treat yourself without worrying about money"
                    description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
                  />
                  <CardArticle
                    img={plane}
                    author="By Wilson Hutton"
                    link="#"
                    title="Take your Easybank card wherever you go"
                    description="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
                  />
                  <CardArticle
                    img={confetti}
                    author="By Claire Robinson"
                    link="#"
                    title="Our invite-only Beta accounts are now live!"
                    description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
                  />
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;