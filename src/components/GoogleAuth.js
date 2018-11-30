import React from "react";
import {GoogleOAuthKey} from '../constants';

class GoogleAuth extends React.Component {
  componentDidUpdate() {
      //Initialize Google OAuth
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:GoogleOAuthKey,
        scope:'email'
      });
    });
  }

  render() {
    return <div>Ga</div>;
  }
}

export default GoogleAuth;
