import { motion } from "framer-motion";
import contactImg from "../../assets/contact/emailIcon.png";
import linkedinImg from "../../assets/contact/linkedinIcon.png";
import githubImg from "../../assets/contact/githubIcon.png";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <motion.footer 
            id="contact" 
            className={styles.container}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Send me an email ! :D</p>
            </div>
            <ul className={styles.links}>
                <motion.li 
                    className={styles.link}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img src={contactImg} alt="contact-img" />
                    <a href="mailto:brandonstambuk@gmail.com">brandonstambuk@gmail.com</a>
                </motion.li>
                <motion.li 
                    className={styles.link}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src={linkedinImg} alt="linkedin-img" />
                    <a href="www.linkedin.com/in/brandon-alejandro-stambuk-04332b26b">Linkedin.com/Brandon-Stambuk</a>
                </motion.li>
                <motion.li 
                    className={styles.link}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={githubImg} alt="Github-img" />
                    <a href="https://github.com/BrandonStambuk">Github.com/Brandon-Stambuk</a>
                </motion.li>
            </ul>
        </motion.footer>
    );
};
