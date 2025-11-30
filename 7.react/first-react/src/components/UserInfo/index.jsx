import styles from "./style.module.css";

export default function UserInfo({ name, avatar }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="" />
      <h2>{name} </h2>
    </div>
  );
}
