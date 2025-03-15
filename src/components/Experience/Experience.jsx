import { motion } from "framer-motion";
import skills from '../data/skills';
import history from '../data/history';
import styles from './Experience.module.css';

export const Experience = () => {
    return (
        <motion.section 
            className={styles.container} 
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <h2 className={styles.title}>Experience & Education</h2>
            <div className={styles.content}>
                {/* Contenedor de Skills */}
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.skill}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageUrl} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Contenedor de History */}
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <motion.li 
                            key={id} 
                            className={styles.historyItem}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 2, x: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={historyItem.image} alt={historyItem.University} />
                            <div>
                                <h3 className={styles.historyItemmDetails}>{historyItem.University}</h3>
                                <p>{historyItem.Degree} in {historyItem["Field of study"]}</p>
                                <p>{historyItem.startYear} - {historyItem.endYear}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};
