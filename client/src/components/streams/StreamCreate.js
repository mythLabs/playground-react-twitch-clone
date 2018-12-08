import React from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import { compose } from "redux";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""} `;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off " />
        {this.renderError(meta)}
      </div>
    );
  };

  onsubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onsubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "you must enter title";
  }

  if (!formValues.description) {
    errors.description = "you must enter description";
  }

  return errors;
};

// Connect + redux from without compose
// const fromWrapped = reduxForm({
//   validate,
//   form: "streamCreate"
// })(StreamCreate);

// export default connect(null,{createStream})(fromWrapped);

// Connect + redux from with compose
export default compose(
  connect(
    null,
    { createStream }
  ),
  reduxForm({ validate, form: "streamCreate" })
)(StreamCreate);
