import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {

    componentDidMount() {
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      const { history } = this.props;
      if (!this.props.authenticated) {
        history.push('/signin');
      }
    }

    render() {
      console.log(this.props.authenticated);
      console.log(ComposedComponent);
      return (this.props.authenticated) ? <ComposedComponent />: null;
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
      
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
