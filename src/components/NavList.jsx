import '../css/NavList.css';

const NavList = ({route, text}) => {
  return(
    <li className="nav__menu__list__item">
      <a href={route} className="nav__menu__list__item__link">
        {text}
      </a>
    </li>
  );
};

export default NavList;