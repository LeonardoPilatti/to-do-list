import styles from './App.module.css';

import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/Task/AddTask';
import { Header as TaskHeader } from './components/Task/Header';
import { Empty } from './components/Task/Empty';
import { Item } from './components/Task/Item';

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.completed) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <AddTask setTasks={setTasks} />
        <TaskHeader tasksCompleted={checkedTasksCounter} totalTasks={tasks.length}/>
        {tasks.length > 0 ? (
          <div className={styles.taskContainer}>
            {tasks.map((task) => (
              <Item
                key={task.id}
                task={task}
                toggleTaskStatus={handleToggleTask}
                removeTask={handleRemoveTask}
              />
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </main>
  );
}
