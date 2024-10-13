import '../css/Footer.css';

const FooterNavList = ({ route, text }) => {
  return(
    <li className="social__item">
      <a href={route} className="social__link">
        {text}
      </a>
    </li>
  );
};

export default FooterNavList;