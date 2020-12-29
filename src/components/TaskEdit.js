import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodo, editTodo, cleanTodo } from "../actions";
import TaskForm from "./TaskForm";

const TaskEdit = (props) => {
  useEffect(() => {
    props.fetchTodo(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    props.editTodo(props.match.params.id, props.todo.userId, formValues);

    props.cleanTodo();
  };

  const cleanTodo = () => {
    props.cleanTodo();
  };

  if (!props.todo.title) {
    return (
      <div className="ui row">
        <div className="column twelve">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="ui row">
      <div className="column twelve">
        <h1>Edit Form</h1>
        <TaskForm
          initialValues={props.todo}
          onSubmit={onSubmit}
          onClick={cleanTodo}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todo: state.todo };
};

export default connect(mapStateToProps, {
  fetchTodo,
  editTodo,
  cleanTodo,
})(TaskEdit);
