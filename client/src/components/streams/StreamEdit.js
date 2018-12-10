import React from "react";
import { connect } from "react-redux";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
        this.props.updateStream(this.props.match.params.id,formValues);
  }

  render() {
      const stream = this.props.stream;
      if(!stream) {
          return <div>!!!Loading</div>
      } else {
        return (
            <div><h3>Edit Stream</h3>
            <StreamForm initialValues={_.pick(stream,'title','description')} onSubmit={this.onSubmit} />
            </div>
        )
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream,updateStream }
)(StreamEdit);
