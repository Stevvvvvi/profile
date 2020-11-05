import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import About from './component/about/about.component';
import Cursor from './component/cursor/cursor.component';
import Header from './component/header/header.component';
import HomePage from './views/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Switch> */}
        <Route path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/project' />
        <Route path='' />
      {/* </Switch> */}
      <Cursor />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
