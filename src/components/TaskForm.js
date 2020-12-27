import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaskForm = (props) => {
  const [title, setTitle] = useState(props.values.title);
  const [completed, setCompleted] = useState(props.values.completed);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeCheck = () => {
    setCompleted(completed ? false : true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formValues = { title, completed };
    props.onSubmit(formValues);
  };

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>Title</label>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={(e) => onChangeTitle(e)}
          className="input"
        />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="checkbox"
            checked={completed}
            onChange={onChangeCheck}
          />
          <label>{completed === true ? "Completed" : "Uncompleted"}</label>
        </div>
      </div>
      <Link to="/" className="ui red button" onClick={props.onClick}>
        Come Back
      </Link>
      <button className="ui green button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
