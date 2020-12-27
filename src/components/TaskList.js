import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

const TaskList = (props) => {
  const onChange = (id) => {
    history.push(`/task/edit/${id}`);
  };

  const renderedResults = props.todos
    .map((todo) => {
      const User = (user) => {
        return user.id === todo.userId;
      };

      let userp = props.users.find(User);

      return (
        <div className="item" key={todo.id}>
          <div className="right floated content">
            <Link to={`/task/delete/${todo.id}`} className="ui red button">
              <i className="trash icon" />
              Delete
            </Link>
            <Link to={`/task/edit/${todo.id}`} className="ui yellow button">
              <i className="edit icon" />
              Edit
            </Link>
          </div>
          <div className="content">
            <div className="ui checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
              />
              <label></label>
            </div>

            <Link to={`/task/edit/${todo.id}`} className="header">
              {todo.id} {userp.name}
            </Link>

            <div className="description">{todo.title}</div>
          </div>
        </div>
      );
    })
    .reverse();

  return (
    <div className="ui row">
      <div className="column twelve">
        <h1>Task List</h1>
        <div className="ui relaxed divided list">{renderedResults}</div>
      </div>
    </div>
  );
};

export default TaskList;
