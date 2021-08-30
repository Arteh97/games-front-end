import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Navbar className={styles.navbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navbar}>
          <Link to="/">
            <Logo className={styles.__brand} />
          </Link>
          <Link to="/categories" className="nav-item active">
            <button className={styles.nav__link} href="/categories">
              Categories
            </button>
          </Link>
          <Link to="/reviews">
            <button className={styles.nav__link}>Reviews</button>
          </Link>
          <Link to="/users">
            <button className={styles.nav__link}>Users</button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
