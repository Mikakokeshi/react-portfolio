import './App.css';
import React from 'react'
import {Home, Profile, Works, Contact} from './components'
import {Header, Footer} from './components'
import { BrowserRouter , Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route component={Home} path="/" exact/>
          <Route component={Profile} path="/profile" exact/>
          <Route component={Works} path="/works" exact/>
          <Route component={Contact} path="/contact" exact/>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

