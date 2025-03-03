import skills from '../data/skills';
import history from '../data/history';
import styles from './Experience.module.css';

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience & Education</h2>
            <div className={styles.content}>
                {/* Contenedor de Skills */}
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageUrl} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>

                {/* Contenedor de History */}
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <li key={id} className={styles.historyItem}>
                            <img src={historyItem.image} alt={historyItem.University} />
                            <div>
                                <h3 className={styles.historyItemmDetails}>{historyItem.University}</h3>
                                <p>{historyItem.Degree} in {historyItem["Field of study"]}</p>
                                <p>{historyItem.startYear} - {historyItem.endYear}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
