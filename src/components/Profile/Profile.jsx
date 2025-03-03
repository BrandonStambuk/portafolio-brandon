
import ProfileImage from "../../assets/hero/heroImage.png";

import styles from "./Profile.module.css";
export const Profile = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi im Brandon</h1>
            <p className={styles.description}     
            >Im a full stack developer :D</p>
            <a href="mailto:brandonstambuk@gmail.com" className={styles.contactBtn}>Contact me!</a>
        </div>
        <img src={ProfileImage} alt="profile-image" className={styles.ProfileImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
};