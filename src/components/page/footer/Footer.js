import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const PageFooter = ( { children } ) => (
    <footer className={ classNames( "page-footer" ) }>
        <div className="content has-text-centered">
            { children }
        </div>
    </footer>
);

PageFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

PageFooter.defaultProps = {
};

export default PageFooter;
