import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Denise Tsui
        </a>
        <div className={styles.menu}>
            <img 
                className={styles.menuDropdown} 
                src={getImageUrl("nav/menuIcon.png")}
                alt="menu-button"
                // onClick={() => setMenuOpen(!menuOpen)}
            /> 
            <ul className={styles.menuItems}>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#fun">collection</a>
                </li>
                <li>
                    <a href="#resume">resume</a>
                </li>
            </ul>
        </div>
    </nav>
  )
};
