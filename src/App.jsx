import React from 'react';
import './App.css';
import NavBarArea from './Components/navBarArea/NavBarArea';
import HomeArea from './Components/homeArea/homeArea';
import resumeArea from './Components/resumeArea/resumeArea';
import projectsArea from './Components/projectsArea/projectsArea';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBarArea />
          <Route exact path="/" render={(props) => <HomeArea/> }></Route>
          <Route exact path="/resume" render={(props) => <resumeArea/> }></Route>
          <Route exact path="/projects" render={(props) => <projectsArea/> }></Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
