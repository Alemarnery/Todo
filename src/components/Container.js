import React, { useEffect } from "react";
import TaskList from "./TaskList";
import { connect } from "react-redux";
import { fetchTodos, fetchUsers } from "../actions";
import _ from "lodash";
import SearchBar from "./SearchBar";

const Container = (props) => {
  useEffect(() => {
    if (!props.todos.length > 0) {
      props.fetchTodos();
      props.fetchUsers();
    }
  }, []);

  const { todos, users } = props;

  if (!users.length > 0) {
    return (
      <div className="ui row">
        <div className="column twelve">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid container">
      <br />
      <SearchBar todos={todos} users={users} />
      <br />
      <TaskList todos={todos} users={users} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: _.values(state.todos), users: state.users };
};

export default connect(mapStateToProps, { fetchTodos, fetchUsers })(Container);
