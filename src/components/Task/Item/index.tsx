import { Check, Trash } from '@phosphor-icons/react';
import styles from './Item.module.css';
import { ITask } from '../../../App';

interface IItem {
  task: ITask;
}

export const Item = ({ task }: IItem) => {
  const checkboxCheckedClassname = task.completed
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];
  const paragraphCheckedClassname = task.completed
    ? styles['paragraph-checked']
    : '';

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly checked={task.completed} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.completed && <Check size={12} />}
          </span>
          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {task.text}
          </p>
        </label>
      </div>
      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
};
