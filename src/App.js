import React from 'react';

import Header from 'components/header';
import TodoPage from 'pages/todo-page';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <TodoPage />
    </div>
  );
}

export default App;
