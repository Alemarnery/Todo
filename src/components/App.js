import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Container from "./Container";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";
import TaskDelete from "./TaskDelete";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container grid">
        <Switch>
          <Route path="/" exact>
            <Container />
            {/* <SearchBar />
            <TaskList /> */}
          </Route>
          <Route path="/task/edit/:id" exact component={TaskEdit} />
          <Route path="/task/delete/:id" exact component={TaskDelete} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
