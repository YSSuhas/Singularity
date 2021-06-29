import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/home'
import Picoftheday from './screens/picoftheday'
import Profile from './screens/profile'
import Askquestion from './screens/askquestion'
import Allquestions from './screens/allquestions'
import Viewquestion from './screens/viewquestion'
import Myquestions from './screens/myquestions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/register"} component={Register} />
          <Route path={"/login"} component={Login} />
          <Route path={"/picture_of_the_day"} component={Picoftheday} />
          <Route path={"/ask_question"} component={Askquestion} />
          <Route path={"/questions/:id"} component={Viewquestion} />
          <Route path={"/questions"} component={Allquestions} />
          <Route path={"/:id/profile"} component={Profile} />
          <Route path={"/:id/questions"} component={Myquestions} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
