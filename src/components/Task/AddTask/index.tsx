import { PlusCircle } from '@phosphor-icons/react';
import styles from './Addtask.module.css';
import { useState } from 'react';
import { ITask } from '../../../App';

type AddTaskProps = {
  setTasks: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        completed: boolean;
      }[]
    >
  >;
};

export const AddTask = ({ setTasks }: AddTaskProps) => {
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTask}>
        <span>Criar</span>
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  );
};
