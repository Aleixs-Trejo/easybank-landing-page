const Cta = ({ route, text }) => {
  return(
    <a href={route} className="btn__cta">{text}</a>
  );
};

export default Cta;