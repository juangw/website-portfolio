import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <header className="App-header">test</header>
        <body>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>edited</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </body>
      </CookiesProvider>
    </div>
  );
}

export default App;
