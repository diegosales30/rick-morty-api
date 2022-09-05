import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <h2>logo</h2>

        <button>dark</button>
      </div>
    </header>
  );
}
