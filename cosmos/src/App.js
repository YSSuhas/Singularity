import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Potd from './components/potd'
import Navbars from './components/navbar'
import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/home"} component={Home}/>
          <Route path={"/"} component={Register} />
        </Switch>
      </BrowserRouter>
        {/*<Navbars />
        <Potd />*/}
    </div>
  );
}

export default App;
