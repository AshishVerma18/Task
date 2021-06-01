import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Route,Switch} from 'react-router-dom'
import './App.css'
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <>
    <Navbar/>
    
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/about"  component={AboutUs}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/login"  component={Login}/>
        <Route path="/signup"  component={Signup}/>
        <Route path="/errpage" component={ErrorPage}/>      
      </Switch>   
    </>
  );
}
export default App;