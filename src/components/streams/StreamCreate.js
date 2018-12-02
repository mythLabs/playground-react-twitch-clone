import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput = ({input,label}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
        </div>
    );
  };

  onsubmit = (formValues) => {
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onsubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
