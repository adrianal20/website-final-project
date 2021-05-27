import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Education from './components/pages/Education';
import SignUp from './components/pages/SignUp';
import Professional from './components/pages/Professional';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/education' component={Education} />
        <Route path='/contact-me' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/professional' component={Professional} />
        
      </Switch>
    </Router>
  );
}

export default App;
