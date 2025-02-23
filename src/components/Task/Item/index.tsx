import { Check, Trash } from '@phosphor-icons/react';
import * as S from './Item.module.css';
import { ITask } from '../../../App';

interface IItem {
  task: ITask;
}

export const Item = ({ task }: IItem) => {
  const checkboxCheckedClassname = task.completed
    ? S['checkbox-checked']
    : S['checkbox-unchecked'];
  const paragraphCheckedClassname = task.completed
    ? S['paragraph-checked']
    : '';

  return (
    <div className={S.container}>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" readOnly checked={task.completed} />
          <span className={`${S.checkbox} ${checkboxCheckedClassname}`}>
            {task.completed && <Check size={12} />}
          </span>
          <p className={`${S.paragraph} ${paragraphCheckedClassname}`}>
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
