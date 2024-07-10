import styles from "./parameter.module.css";

function Parameter({ paralogo, paraname, paravalue }) {
  return (
    <div className={styles.cont}>
      <img src={paralogo} alt="parameter" />
      <span className={styles.paraname}>{paraname}</span>
      <span className={styles.paravalue}>{paravalue}</span>
    </div>
  );
}

export default Parameter;
