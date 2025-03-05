import ProfileImage from "../../assets/hero/profile.png";
import styles from "./Profile.module.css";
import cv from "../../assets/umss/CV_BRANDON.pdf"
export const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, Im Brandon</h1>
                <p className={styles.description}>
                    I am a recent Computer Engineering graduate, eager to grow and excel in the IT field. Passionate about technology, I am focused on continuous learning and tackling new challenges. Ready to contribute and develop innovative solutions.
                </p>
                <div className={styles.contactBtnContainer}>
                    <a href={cv} download className={styles.contactBtn}>Download CV</a>
                    <a href="mailto:brandonstambuk@gmail.com" className={styles.contactBtn}>Contact me!</a>
                </div>
            </div>
            <img src={ProfileImage} alt="profile-image" className={styles.ProfileImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};