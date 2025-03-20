import styles from './Header.module.css';

type HeaderType = {
  totalTasks: number;
  tasksCompleted: number;
}

export const Header = ({totalTasks, tasksCompleted}: HeaderType) => {
  return (
    <header className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{totalTasks}</span>
      </aside>
      <aside>
        <p className={styles.purple}>Concluídas</p>
        <span>{tasksCompleted}</span>
      </aside>
    </header>
  );
};
