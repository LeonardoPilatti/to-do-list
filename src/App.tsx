import * as S from './App.module.css';

import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/Task/AddTask';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
      <section className={S.container}>
        <AddTask />
      </section>
    </main>
  );
}

export default App;
