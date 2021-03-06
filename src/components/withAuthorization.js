import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          console.log("blah");
          this.props.history.push(routes.LANDING);
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component {...this.props} /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
}

export default withAuthorization;
