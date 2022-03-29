import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Page = ( { className, background, children } ) => (
    <div className={ classNames( "page", className, `has-background-${ background }` ) }>
        { children }
    </div>
);

Page.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
};

Page.defaultProps = {
    background: "white",
};

export default Page;
