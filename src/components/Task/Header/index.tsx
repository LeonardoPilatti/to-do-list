import * as S from './Header.module.css';

export const Header = () => {
  return (
    <header className={S.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>0</span>
      </aside>
      <aside>
        <p className={S.purple}>Concluídas</p>
        <span>0</span>
      </aside>
    </header>
  );
};
