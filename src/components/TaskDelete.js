import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodo, deleteTask, cleanTodo } from "../actions";
import Modal from "./Modal";
import history from "../history";

const TaskDelete = (props) => {
  useEffect(() => {
    props.fetchTodo(props.match.params.id);
  }, []);

  const onSubmit = (id) => {
    props.deleteTask(id);
    cleanTodo();
  };

  const cleanTodo = () => {
    props.cleanTodo();
  };

  return (
    <div className="ui row">
      <div className="column twelve">
        <Modal
          title="Delete Task"
          values={props.todo}
          onSubmit={onSubmit}
          onClick={cleanTodo}
          onDismiss={() => history.push("/")}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todo: state.todo };
};

export default connect(mapStateToProps, { fetchTodo, deleteTask, cleanTodo })(
  TaskDelete
);
