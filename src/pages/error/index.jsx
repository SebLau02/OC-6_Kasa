import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div id="error">
      <span>404</span>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/">Retour sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
