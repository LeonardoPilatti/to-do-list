import * as S from './App.module.css';

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
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Primeira tarefa', completed: false },
  ]);

  return (
    <main>
      <Header />
      <section className={S.container}>
        <AddTask />
        <TaskHeader />
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <Item task={task} />
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </main>
  );
}
