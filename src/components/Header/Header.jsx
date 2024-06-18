import { formatData } from "../../helpers/formatDate";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Use REACTIFY</h1>
      <p className={styles.date}>{formatData(new Date())}</p>
    </header>
  );
}
