import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProfileImage from "../../assets/hero/profile.png";
import styles from "./Profile.module.css";
import cv from "../../assets/umss/CV_BRANDON.pdf";

export const Profile = () => {
    const text = "Hi, i'm Brandon";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <motion.section 
            className={styles.container}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{once:true ,amount: 0.2 }}
        >
            <div className={styles.content}>
                <h1 className={styles.title}>{displayedText}</h1>
                <p className={styles.description}>
                Motivated computer engineering student seeking a software development internship to apply skills, contribute to projects, and gain experience. Passionate about learning and problem-solving.</p>
                <div className={styles.contactBtnContainer}>
                    <a href={cv} download className={styles.contactBtn}>Download CV</a>
                    <a href="mailto:brandonstambuk@gmail.com" className={styles.contactBtn}>Contact me!</a>
                </div>
            </div>
            <img src={ProfileImage} alt="profile-image" className={styles.ProfileImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </motion.section>
    );
};