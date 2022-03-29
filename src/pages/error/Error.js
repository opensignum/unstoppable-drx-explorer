import React from "react";
import PropTypes from "prop-types";
import { Page } from "components";

const PageError = ( {
    code,
    title,
    message,
    history,
    hasBackButton,
} ) => (
    <Page>
        <Page.Content>

        </Page.Content>
    </Page>
);

PageError.propTypes = {
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    history: PropTypes.shape(),
    hasBackButton: PropTypes.bool,
};

PageError.defaultProps = {
    history: {},
    hasBackButton: false,
};

export default PageError;
