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
import Profileedit from './screens/profileedit'
import Myanswers from './screens/myanswers'
import Chat from './screens/chat'
import Searchquestions from './screens/searchquestions'
import Starredquestions from './screens/starredquestions'
import Starredanswers from './screens/starredanswers'
import Allchats from './screens/allchats'

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
          <Route path={"/:id/edit_profile"} component={Profileedit}/>
          <Route path={"/:id/profile"} component={Profile} />
          <Route path={"/:id/questions"} component={Myquestions} />
          <Route path={"/:id/answers"} component={Myanswers} />
          <Route path={"/chat/:id"} component={Chat} />
          <Route path={"/search/:id"} component={Searchquestions} />
          <Route path={"/:id/starredquestions"} component={Starredquestions} />
          <Route path={"/:id/starredanswers"} component={Starredanswers} />
          <Route path={"/chats"} component={Allchats} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
