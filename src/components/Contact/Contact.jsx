import contactImg from "../../assets/contact/emailIcon.png";
import linkedinImg from "../../assets/contact/linkedinIcon.png";
import githubImg from "../../assets/contact/githubIcon.png";
import styles from "./Contact.module.css";
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>
                   Send me an email ! :D
                </p>

            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={contactImg} alt="contact-img" />
                    <a href="mailto:brandonstambuk@gmail.com">brandonstambuk@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinImg} alt="linkedin-img" />
                    <a href="www.linkedin.com/in/brandon-alejandro-stambuk-04332b26b">Linkedin.com/Brandon-Stambuk</a>
                </li>
                <li className={styles.link}>
                    <img src={githubImg} alt="Github-img" />
                    <a href="https://github.com/BrandonStambuk">Github.com/Brandon-Stambuk</a>
                </li>
            </ul>
        </footer>
    );
};