import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import history from "./history";
import About from "./components/pages/About";
import Default from "./components/pages/Default";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router history={history}>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />
              <Route component={Default} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
