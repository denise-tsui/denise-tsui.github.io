import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
import pdf_resume from "../../../assets/2024TsuiDenise_resume.pdf";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className={styles.section}>
            <nav className={styles.navbar}>
                <a className={styles.title} href="/">
                    Denise Tsui
                </a>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuDropdown} 
                        src={
                            menuOpen
                            ? "../assets/nav/closeIcon.png"
                            : "../assets/nav/menuOpen.png"
                        }
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    /> 
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                        <li>
                            <a href ="/#/work">work</a>
                        </li>
                        {/* <li>
                            <a href="/#/about">about</a>
                        </li> */}
                        <li>
                            <a href="/#/fun">collection</a>
                        </li>
                        <li>
                            <a href={pdf_resume}
                                target="_blank"
                                rel="noreferrer">
                                resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
};
