import { Link } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header>
      <Link to={`/`} className="logo">
        Lerning Hub
      </Link>
      <ul>
        <li>
          <Link to={`/`}>Модулі</Link>
        </li>
        <li>
          <Link to={`/modules/1`}>Теми</Link>
        </li>
      </ul>
    </header>
  );
};
