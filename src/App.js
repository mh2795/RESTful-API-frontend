import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import PlayersList from "./components/players-list.component";
import EditPlayer from "./components/edit-player.component";
import CreatePlayer from "./components/create-player.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={PlayersList} />
      <Route path="/edit/:id" component={EditPlayer} />
      <Route path="/create" component={CreatePlayer} />
      </div>
    </Router>
  );
}

export default App;