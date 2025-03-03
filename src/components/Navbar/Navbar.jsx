import {useState} from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeMenuIcon from "../../assets/nav/closeIcon.png";
export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} 
    src={menuOpen ? closeMenuIcon : menuIcon} 
    alt="menu"
    onClick={() => setMenuOpen(!menuOpen)}
/>

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                <li>
                    <a href="#about">About</a>

                </li>
                <li>
                    <a href="#experience">Experience</a>

                </li>
                <li>
                    <a href="#Projects">Projects</a>

                </li>
                <li>
                    <a href="#contact">Contact</a>

                </li>
            </ul>
        </div>
    </nav>;
};