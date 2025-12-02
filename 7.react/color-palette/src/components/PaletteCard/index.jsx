import styles from "./style.module.css";

export default function PaletteCard({ from, to, onClick }) {
  return (
    <li className={styles.palette} onClick={onClick}>
      <div
        className={styles["palette-gradient"]}
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
        }}
      ></div>
      <p className={styles["palette-caption"]}>
        {from} - {to}
      </p>
    </li>
  );
}
