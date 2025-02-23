import { PlusCircle } from '@phosphor-icons/react';
import styles from './Addtask.module.css';

export const AddTask = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        <span>Criar</span>
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  );
};
