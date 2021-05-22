import React from "react";
import "./App.css";
import Header from "./features/Header";
import Sidebar from "./features/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./features/Mail";
import EmailList from "./features/EmailList";
import SendMail from "./features/SendMail";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail/>
              </Route>
              <Route path="/">
                <EmailList/>              
            </Route>
          </Switch>
        </div>
        <SendMail/>
      </div>
    </Router>
  );
}

export default App;
