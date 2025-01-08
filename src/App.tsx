import * as S from './App.module.css';

import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/Task/AddTask';
import { Header as TaskHeader } from './components/Task/Header';
import { Empty } from './components/Task/Empty';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <section className={S.container}>
        <AddTask />
        <TaskHeader />
        <Empty />
      </section>
    </main>
  );
}

export default App;
