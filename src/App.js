import React from 'react';
import './App.css';
import { Switch,Route,Redirect, BrowserRouter as Router, useHistory} from 'react-router-dom'  
import Home from './pages/home';
import Auth from './components/auth';



function App() {

  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/home' component={Home} />
          <Redirect to='/auth' from='*' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
