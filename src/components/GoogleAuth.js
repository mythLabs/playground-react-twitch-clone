import React from "react";
import { GoogleOAuthKey } from "../constants";
import { connect } from 'react-redux';
import {SignIn,SignOut} from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    //Initialize Google OAuth
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: GoogleOAuthKey,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange( this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.SignIn()
    } else {
      this.props.SignOut()
    }
  };

  onSignInClick = () => {
       this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon">Sign Out</i>
        </button>
      );
    } else {
        return (
            <button className="ui red google button" onClick={this.onSignInClick}>
              <i className="google icon">Sign In With Google</i>
            </button>
          );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {SignIn,SignOut})(GoogleAuth);
