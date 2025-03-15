import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div id="Projects" className={styles.containerProjects}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.hourglassBackground}>
        <div className={styles.hourglassContainer}>
          <div className={styles.hourglassCurves}></div>
          <div className={styles.hourglassCapTop}></div>
          <div className={styles.hourglassGlassTop}></div>
          <div className={styles.hourglassSand}></div>
          <div className={styles.hourglassSandStream}></div>
          <div className={styles.hourglassCapBottom}></div>
          <div className={styles.hourglassGlass}></div>
          
        </div>
       
      </div>
      <h2 className={styles.subtitle}>Loading...</h2>
    </div>
  );
};
