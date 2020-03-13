import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import SignOutButton from '../SignOut';

class Landing extends Component {
  getIdToken() {
    const { firebase } = this.props;
    firebase.refreshUserToken();
  };

  render() {
    return (
        <div>
          <h1>Landing</h1>
          <button type="button" onClick={() => this.getIdToken()}>Whats my token? </button>
          <SignOutButton />
        </div>
    );
  }
}




export default withFirebase(Landing);
