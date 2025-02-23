import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';
import { ITask } from '../../../App';

interface IItem {
  task: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export const Item = ({ task, toggleTaskStatus, removeTask }: IItem) => {
  function handleTaskToggle() {
    toggleTaskStatus({ id: task.id, value: !task.completed });
  }

  function handleRemove() {
    removeTask(task.id);
  }

  const checkboxCheckedClassname = task.completed
    ? styles['checkboxChecked']
    : styles['checkboxUnchecked'];
  const paragraphCheckedClassname = task.completed
    ? styles['paragraphChecked']
    : '';

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={task.completed} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.completed && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {task.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
};
