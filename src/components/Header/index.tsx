import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logo do projeto to do list" />
    </header>
  );
};
