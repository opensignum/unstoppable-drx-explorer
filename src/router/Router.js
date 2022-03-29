import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import {
    PageHome,
    PageError,
} from "../pages";

const Router = ( { children } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <Switch>

                <Route exact path="/" component={ PageHome } />

                <Route
                    path="*"
                    component={ props => (
                        <PageError
                            code={ 404 }
                            title="Page not found"
                            message={ "Sorry, but the page you are looking for was either not found or does not exist.\nTry refreshing the page or click the button below to go back to the Homepage." }
                            hasBackButton
                            { ...props }
                        />
                    ) }
                />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

Router.propTypes = {
    children: PropTypes.node,
};

Router.defaultProps = {
    children: null,
};

export default Router;
