import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo } from "../actions";
import _ from "lodash";

const SearchBar = (props) => {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    let id = props.todos.length + 1;

    let formValue = { title, completed };
    props.editTodo(id, userId, formValue);
    setTitle(" ");
    setCompleted(false);
  };

  const checkbox = () => {
    setCompleted(completed ? false : true);
  };

  const renderedUsers = props.users.map((user) => {
    return (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <div className="ui menu">
      <div className="item">
        <label>User</label>
        <select
          className="ui search dropdown"
          onChange={(e) => setUserId(parseInt(e.target.value))}
        >
          {renderedUsers}
        </select>
      </div>

      <div className="item">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <i className="pencil alternate link icon"></i>
        </div>
      </div>

      <div className="item">
        <div className="ui checkbox">
          <input type="checkbox" checked={completed} onChange={checkbox} />
          <label>Completed</label>
        </div>
      </div>

      <div className="right item">
        <button className="ui green button" onClick={Submit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default connect(null, { editTodo })(SearchBar);
