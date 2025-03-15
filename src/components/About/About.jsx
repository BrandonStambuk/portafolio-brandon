import { motion } from "framer-motion";
import aboutImage from '../../assets/about/me.jpeg';
import cursoImagen from '../../assets/about/cursorIcon.png';
import serverImagen from '../../assets/about/serverIcon.png';
import styles from './About.module.css';

export const About = () => {
    return (
        <motion.section 
            className={styles.container} 
            id='about'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className={styles.title}>About me</h2>
            <div className={styles.content}>
                <img src={aboutImage} alt="about-image" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursoImagen} alt="cursorImagen" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>Im a frontend developer with experience in React, HTML, and JavaScript through academic projects.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverImagen} alt="serverImagen" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>Im a backend developer with experience in Laravel, using the MVC architecture to provide a scalable and clean structure.</p> 
                        </div>
                    </li>
                </ul>
            </div>
        </motion.section>
    );
};
