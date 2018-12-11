import React from "react";
import Modal from "../modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link} from 'react-router-dom';

class StreamDelete extends React.Component {
  renderAction() {
    return (
      <React.Fragment>
        <button className="ui negative button" onClick={this.onDelete}>Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
      if (this.props.stream) {
      return `Are you sure you want to delete stream with title: ${this.props.stream.title} ?`
      }else {
       return 'Are you sure you want to delete ?'
      }
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    const stream = this.props.stream;
      if(!stream) {
          return <div>!!!Loading</div>
      } else {
        return (
              <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push("/")}
              />
          );
      }

    
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
