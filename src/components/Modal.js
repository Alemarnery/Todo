import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title} </div>
        <div className="content">
          <div className="description">
            <p>
              Are you sure you want to delete this the task with title:
              <b>{props.values.title}</b>
            </p>
          </div>
        </div>
        <div className="actions">
          <button
            onClick={() => props.onSubmit(props.values.id)}
            className="ui button negative"
          >
            Delete
          </button>
          <Link to="/" className="ui button" onClick={props.onClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default Modal;
