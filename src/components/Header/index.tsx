import * as S from './Header.module.css';

export const Header = () => {
  return (
    <header className={S.header}>
      <img src="/logo.svg" alt="Logo do projeto to do list" />
    </header>
  );
};
