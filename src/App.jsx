import React from 'react';
import './App.css';
import NavBarArea from './Components/navBarArea/NavBarArea';
import AboutMeArea from './Components/aboutMeArea/AboutMeArea';
import ProjectsArea from './Components/projectsArea/projectsArea';
import FooterArea from './Components/footerArea/footerArea';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <NavBarArea />
        </header>
        <Route exact path='/' render={(props) => <AboutMeArea {...props}/> }></Route>
        <Route exact path='/projects' render={(props) => <ProjectsArea {...props}/> }></Route>
        <footer>
          <FooterArea />
        </footer>
      </div>
    </Router>
  );
}

export default App;
