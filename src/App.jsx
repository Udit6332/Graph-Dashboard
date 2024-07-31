import React from 'react';
import Sidebar from './Components/Sidebar';
import style from './app.module.css';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <div id={style.mainComp}>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;
