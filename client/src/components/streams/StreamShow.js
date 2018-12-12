import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    debugger;
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    const stream = this.props.stream;
    if (!stream) {
      return <div>!!!Loading</div>;
    } else {
      return (
        <div>
          <h1>{stream.title}</h1> <h5>{stream.description}</h5>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
