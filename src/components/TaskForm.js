import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const TaskForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" className="input" />
        {renderError(meta)}
      </div>
    );
  };

  const renderCheck = ({ input, label, meta }) => {
    const { checked } = input;
    return (
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" {...input} />
          <label>{checked === true ? "Completed" : "Uncompleted"}</label>
        </div>
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" label="title" component={renderInput} />
      <Field type="checkbox" name="completed" component={renderCheck} />
      <Link to="/" className="ui red button" onClick={props.onClick}>
        Come Back
      </Link>
      <button className="ui green button" type="submit">
        Submit
      </button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a Title";
  }

  return errors;
};

export default reduxForm({
  form: "EditTask",
  enableReinitialize: true,
  validate,
})(connect()(TaskForm));
