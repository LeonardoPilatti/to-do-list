import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>0</span>
      </aside>
      <aside>
        <p className={styles.purple}>Concluídas</p>
        <span>0</span>
      </aside>
    </header>
  );
};
