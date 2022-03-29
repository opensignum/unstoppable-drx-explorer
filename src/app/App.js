import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "@fortawesome/fontawesome-free/css/all.css";
import "react-notifications/lib/notifications.css";
import "../assets/scss/style.scss";

import Router from "router/Router";

import { PageError } from "pages";
import { ErrorHandler } from "components";
import { actions } from "./duck";

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;

        Init();
    }

    render() {
        const {
            isConnected,
        } = this.props;

        if ( isConnected === false ) {
            return (
                <div className="app">
                    <PageError
                        code={ 503 }
                        title="Could not connect to the API"
                        message="Please try again later."
                        color="white"
                        background="primary"
                    />
                </div>
            );
        }

        return (
            <div className="app">
                <Router />
            </div>
        );
    }
}

App.defaultProps = {
    isConnected: null,
};

App.propTypes = {
    isConnected: PropTypes.bool,

    Init: PropTypes.func.isRequired,
};

const mSTP = ( {
    app: {
        isConnected, isAuthenticated, roles,
    },
} ) => ( {
    isConnected, isAuthenticated, roles,
} );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
