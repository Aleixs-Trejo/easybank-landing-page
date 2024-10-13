import '../css/Footer.css';

const FooterSocialList = ({ route, children }) => {
  return(
    <li className="flex-c-c social__item">
      <a href={route} className="social__link">
        {children} {/* Usamos children para que pueda recibir otras etiquetas hijas y el componen debe abrir y cerrarse en dos etiquetas */}
      </a>
    </li>
  );
};

export default FooterSocialList;