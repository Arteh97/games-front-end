import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/categories">
        <button>Categories</button>
      </Link>
      <Link to="/reviews">
        <button>Reviews</button>
      </Link>
      <Link to="/users">
        <button>Users</button>
      </Link>
    </div>
  );
};

export default Navigation;
