import React from 'react';
import './App.css';
import NavBarArea from './Components/navBarArea/NavBarArea';
import HomeArea from './Components/homeArea/homeArea';
import ResumeArea from './Components/resumeArea/resumeArea';
import ProjectsArea from './Components/projectsArea/projectsArea';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBarArea />
          <Route exact path="/" render={(props) => <HomeArea {...props}/> }></Route>
          <Route exact path="/resume" render={(props) => <ResumeArea {...props}/> }></Route>
          <Route exact path="/projects" render={(props) => <ProjectsArea {...props}/> }></Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
