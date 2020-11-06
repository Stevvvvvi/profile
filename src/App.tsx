import ParticlesBg from 'particles-bg';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import About from './component/about/about.component';
import Cursor from './component/cursor/cursor.component';
import Header from './component/header/header.component';
import HomePage from './views/home-page/home-page.component';
import Projects from './views/projects/projects-page.component';

function App() {
  let config = {
    num: [2, 5],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "all", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "cross", // cross or bround
    random: 15,  // or null,
    g: 2,    // gravity
    // f: [2, -1], // force
    // onParticleUpdate: (ctx: { beginPath: () => void; rect: (arg0: any, arg1: any, arg2: number, arg3: number) => void; fillStyle: any; fill: () => void; closePath: () => void; }, particle: { p: { x: any; y: any; }; radius: number; color: any; }) => {
    //     ctx.beginPath();
    //     ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
    //     ctx.fillStyle = particle.color;
    //     ctx.fill();
    //     ctx.closePath();
    // }
  };
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/project' component={Projects} />
        <Route path='' />
      </Switch>
      <Cursor />
      <div style={{position:"fixed",height:"100%",width:"100%",left:'0',bottom:'0',zIndex:-10}}><ParticlesBg type="custom" bg={true} config={config} /></div>
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
