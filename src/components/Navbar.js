import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <h1>Math Magician</h1>
      <div className={styles.links}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/calculator">
          Calculator
        </NavLink>
        <NavLink className={styles.navLink} to="/Quotes">
          Quote
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
