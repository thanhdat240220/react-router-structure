import React, { Component } from 'react';
import Header from 'client/components/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../actioncreators/authAction';

const App = withRouter(
    //connect(mapStateToProps,mapDispatchToProps)(
    ({ history, children }) => {
        console.log(history, children);
        return (
            <div>
                <Header />
                <div className="bounds">
                    {children}
                </div>
            </div>
        )
    }
    //)
);

function mapStateToProps({ auth }) { // extract just the auth part of the state
    return {
        loggedIn: auth.loggedIn,
        user: auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

export default App;