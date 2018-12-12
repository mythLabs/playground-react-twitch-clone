import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef =React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return
    }
    const { id } = this.props.match.params;
    this.player =flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${ id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const stream = this.props.stream;
    if (!stream) {
      return <div>!!!Loading</div>;
    } else {
      return (
        <div>
          <video ref={this.videoRef} style={{width:'100%'}} controls= {true}/>
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
