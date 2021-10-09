import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {Landing}/>
      <Route exact path = '/home' component = {Home}/>
      <Route path = '/home/:id' component = {Detail}/>
      <Route path = '/pokemons' component = {Create}/>
    </div>
  );
}

export default App;
