import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}/>
      </Router>
    </div>
  );
}

export default App;
