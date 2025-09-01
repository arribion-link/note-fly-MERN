import { Link } from "react-router";
const Header = () => {
  return (
      <header>
      <div>
        <Link to="/">
            <h1 className="logo">NOTE-FLY</h1>
        </Link>
        </div>
        <div>
            <p className="arribion"> Arribion Technologies - codify</p>
      </div>
      <div>
        <Link to="/create">
          <button className="header-add-btn">New Note</button>
        </Link>
      </div>
    </header>
  );
}

export default Header